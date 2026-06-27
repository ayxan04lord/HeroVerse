import { useParams, Link } from 'react-router-dom';
import { heroes } from '../data/heroes';
import Cards_list_item from '../Components/cards_list_item/Cards_list_item';
import './UniversePage.css';

const UNIVERSE_META = {
  Marvel: { color: '#e23636', icon: '🦸', desc: 'Earth\'s Mightiest Heroes from the Marvel Cinematic Universe.' },
  DC:     { color: '#1565c0', icon: '🦇', desc: 'Iconic heroes and legends from the DC Universe.' },
  Villain:{ color: '#6a1b9a', icon: '💀', desc: 'The most formidable villains across every universe.' },
};

const UniversePage = () => {
  const { name } = useParams();
  const meta = UNIVERSE_META[name] || { color: '#37474f', icon: '⚡', desc: `Heroes of the ${name} universe.` };
  const universeHeroes = heroes.filter(h => h.category === name);

  if (universeHeroes.length === 0) {
    return (
      <div className="uni-not-found">
        <div className="uni-nf-icon">🌌</div>
        <h2>Universe not found</h2>
        <Link to="/" className="uni-back-link">← Back to Heroes</Link>
      </div>
    );
  }

  const avgRating = (universeHeroes.reduce((s, h) => s + h.rating, 0) / universeHeroes.length).toFixed(1);

  return (
    <main className="uni-page">
      {/* Banner */}
      <div className="uni-banner" style={{ '--uni-color': meta.color }}>
        <div className="uni-banner-glow" aria-hidden="true" />
        <div className="uni-banner-content">
          <span className="uni-icon">{meta.icon}</span>
          <h1 className="uni-title">{name}</h1>
          <p className="uni-desc">{meta.desc}</p>
          <div className="uni-stats">
            <div className="uni-stat">
              <strong>{universeHeroes.length}</strong>
              <span>Characters</span>
            </div>
            <div className="uni-stat-sep" />
            <div className="uni-stat">
              <strong>★ {avgRating}</strong>
              <span>Avg Rating</span>
            </div>
            <div className="uni-stat-sep" />
            <div className="uni-stat">
              <strong>{Math.max(...universeHeroes.map(h => Number(h.date)))}</strong>
              <span>Latest</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="uni-content">
        <h2 className="uni-section-title">All {name} Characters</h2>
        <div className="uni-grid">
          {universeHeroes.map(hero => (
            <Cards_list_item key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default UniversePage;
