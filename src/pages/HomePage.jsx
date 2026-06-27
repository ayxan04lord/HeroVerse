import { heroes } from '../data/heroes';
import HeroBanner from '../Components/heroBanner/HeroBanner';
import CardList from '../Components/cardList/CardList';

const HomePage = ({ search, activeCategory }) => {
  const filtered = heroes.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HeroBanner />
      <CardList data={filtered} />
    </>
  );
};

export default HomePage;
