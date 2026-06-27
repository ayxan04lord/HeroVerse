import { useParams, Link } from 'react-router-dom';
import { heroes } from '../data/heroes';
import { useFavorites } from '../contexts/FavoritesContext';
import './HeroDetailPage.css';

const badgeClass = (category) => {
  if (category === 'Marvel') return 'badge-Marvel';
  if (category === 'DC') return 'badge-DC';
  if (category === 'Villain') return 'badge-Villain';
  return 'badge-default';
};

const HeroDetailPage = () => {
  const { id } = useParams();
  const hero = heroes.find(h => h.id === Number(id));
  const { toggle, isFav } = useFavorites();

  if (!hero) {
    return (
      <div className="detail-not-found">
        <div className="detail-nf-icon">🦸</div>
        <h2>Hero not found</h2>
        <Link to="/" className="detail-back-link">← Back to all heroes</Link>
      </div>
    );
  }

  const relatedHeroes = heroes.filter(h => h.category === hero.category && h.id !== hero.id);

  return (
    <div className="detail-page">
      {/* Hero Banner */}
      <div className="detail-banner" style={{ '--hero-color': hero.color }}>
        <div
          className="detail-banner-bg"
          style={{ backgroundImage: `url(${hero.img})` }}
          aria-hidden="true"
        />
        <div className="detail-banner-overlay" />
        <div className="detail-banner-content">
          <span className={`detail-badge ${badgeClass(hero.category)}`}>
            {hero.category}
          </span>
          <h1 className="detail-name">{hero.name}</h1>
          <p className="detail-tagline">{hero.description}</p>
          <div className="detail-meta">
            <span className="detail-rating">★ {hero.rating}</span>
            <span className="detail-year">Since {hero.date}</span>
            <button
              className={`detail-fav-btn ${isFav(hero.id) ? 'active' : ''}`}
              onClick={() => toggle(hero.id)}
              aria-label={isFav(hero.id) ? 'Remove from favourites' : 'Add to favourites'}
            >
              {isFav(hero.id) ? '♥ Saved' : '♡ Save'}
            </button>
            <Link to="/compare" className="detail-compare-btn">⚔️ Compare</Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        <div className="detail-grid">

          {/* Bio */}
          <section className="detail-bio">
            <h2 className="detail-section-title">Origin Story</h2>
            <p className="detail-bio-text">{hero.fullBio}</p>
          </section>

          {/* Powers */}
          <section className="detail-powers">
            <h2 className="detail-section-title">Powers & Abilities</h2>
            <ul className="powers-list">
              {hero.powers.map((power, i) => (
                <li key={i} className="power-item">
                  <span className="power-dot" />
                  {power}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Related Heroes */}
        {relatedHeroes.length > 0 && (
          <section className="detail-related">
            <h2 className="detail-section-title">More from {hero.category}</h2>
            <div className="related-grid">
              {relatedHeroes.map(r => (
                <Link to={`/hero/${r.id}`} key={r.id} className="related-card">
                  <img src={r.img} alt={r.name} className="related-img" loading="lazy" />
                  <div className="related-info">
                    <span className="related-name">{r.name}</span>
                    <span className="related-rating">★ {r.rating}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default HeroDetailPage;
