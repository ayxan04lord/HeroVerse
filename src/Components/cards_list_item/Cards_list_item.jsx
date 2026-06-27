import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/FavoritesContext';
import './Cards_list_item.css';

const badgeClass = (category) => {
  if (category === 'Marvel') return 'badge-Marvel';
  if (category === 'DC') return 'badge-DC';
  if (category === 'Villain') return 'badge-Villain';
  return 'badge-default';
};

const TOP_RATING = 4.9;

const Cards_list_item = ({ id, date, name, img, category, description, rating }) => {
  const { toggle, isFav } = useFavorites();
  const fav = isFav(id);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article className="hero-card">
      <Link to={`/hero/${id}`} className="card-img-link" aria-label={`View ${name} details`}>
        <div className="card-img-wrapper">
          {/* Skeleton shown until image loads */}
          {!imgLoaded && <div className="card-skeleton" aria-hidden="true" />}
          <img
            src={img}
            alt={name}
            className={`card-img ${imgLoaded ? 'loaded' : ''}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
          />
          <div className="card-overlay" />
          <span className={`card-badge ${badgeClass(category)}`}>{category}</span>
          {rating >= TOP_RATING && (
            <span className="card-top-badge" title="Top Rated">🏆 Top Rated</span>
          )}
          <span className="card-year">{date}</span>
        </div>
      </Link>

      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        {description && <p className="card-description">{description}</p>}

        <div className="card-footer">
          <span className="card-rating">★ {rating ?? '—'}</span>
          <div className="card-actions">
            <button
              className={`card-fav-btn ${fav ? 'active' : ''}`}
              onClick={() => toggle(id)}
              aria-label={fav ? `Remove ${name} from favourites` : `Add ${name} to favourites`}
              title={fav ? 'Remove from favourites' : 'Add to favourites'}
            >
              {fav ? '♥' : '♡'}
            </button>
            <Link to={`/hero/${id}`} className="card-btn">View More</Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards_list_item;
