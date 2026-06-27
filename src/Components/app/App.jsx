import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import HomePage from '../../pages/HomePage';
import HeroDetailPage from '../../pages/HeroDetailPage';
import FavoritesPage from '../../pages/FavoritesPage';
import ComparePage from '../../pages/ComparePage';
import UniversePage from '../../pages/UniversePage';
import NotFoundPage from '../../pages/NotFoundPage';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="App">
      <Nav
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <Routes>
        <Route path="/" element={<HomePage search={search} activeCategory={activeCategory} />} />
        <Route path="/hero/:id" element={<HeroDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/universe/:name" element={<UniversePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
