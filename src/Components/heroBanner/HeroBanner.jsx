import { useNavigate, Link } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import './HeroBanner.css';

const featured = heroes.reduce((a, b) => (a.rating >= b.rating ? a : b));

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleSurprise = () => {
    const random = heroes[Math.floor(Math.random() * heroes.length)];
    navigate(`/hero/${random.id}`);
  };

  return (
    <section className="hero-banner" aria-label="Featured hero">
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${featured.img})` }}
        aria-hidden="true"
      />
      <div className="banner-overlay" aria-hidden="true" />

      <div className="banner-content">
        <p className="banner-label">⚡ Featured Hero</p>
        <h1 className="banner-title">{featured.name}</h1>
        <p className="banner-desc">{featured.description}</p>

        <div className="banner-actions">
          <Link to={`/hero/${featured.id}`} className="banner-btn-primary">
            Explore Hero
          </Link>
          <a href="#heroes" className="banner-btn-secondary">Browse All</a>
          <button className="banner-btn-surprise" onClick={handleSurprise}>
            🎲 Surprise Me
          </button>
        </div>

        <div className="banner-stats">
          <div className="stat">
            <span className="stat-value">{heroes.length}</span>
            <span className="stat-label">Heroes</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">{new Set(heroes.map(h => h.category)).size}</span>
            <span className="stat-label">Universes</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">★ {featured.rating}</span>
            <span className="stat-label">Top Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
