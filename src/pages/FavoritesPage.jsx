import { Link } from 'react-router-dom';
import { heroes } from '../data/heroes';
import { useFavorites } from '../contexts/FavoritesContext';
import Cards_list_item from '../Components/cards_list_item/Cards_list_item';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites, toggle } = useFavorites();
  const favHeroes = heroes.filter(h => favorites.includes(h.id));

  return (
    <main className="fav-page">
      <div className="fav-header">
        <h1 className="fav-title">♥ Favourites</h1>
        <p className="fav-sub">
          {favHeroes.length > 0
            ? `${favHeroes.length} hero${favHeroes.length > 1 ? 'es' : ''} saved`
            : 'No favourites yet'}
        </p>
      </div>

      {favHeroes.length === 0 ? (
        <div className="fav-empty">
          <div className="fav-empty-icon">🦸</div>
          <h2>Your list is empty</h2>
          <p>Click the ♡ on any hero card to save them here.</p>
          <Link to="/" className="fav-empty-btn">Browse Heroes</Link>
        </div>
      ) : (
        <>
          <div className="fav-grid">
            {favHeroes.map(item => (
              <Cards_list_item key={item.id} {...item} />
            ))}
          </div>
          <div className="fav-clear-row">
            <button
              className="fav-clear-btn"
              onClick={() => favHeroes.forEach(h => toggle(h.id))}
            >
              Clear all favourites
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default FavoritesPage;
