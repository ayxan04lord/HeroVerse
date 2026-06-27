import { useState } from 'react';
import { heroes } from '../data/heroes';
import './ComparePage.css';

const badgeClass = (cat) => {
  if (cat === 'Marvel') return 'badge-Marvel';
  if (cat === 'DC') return 'badge-DC';
  if (cat === 'Villain') return 'badge-Villain';
  return 'badge-default';
};

const HeroPicker = ({ label, selected, onChange }) => (
  <div className="compare-picker">
    <label className="picker-label">{label}</label>
    <select
      className="picker-select"
      value={selected ?? ''}
      onChange={e => onChange(Number(e.target.value) || null)}
    >
      <option value="">— Choose hero —</option>
      {heroes.map(h => (
        <option key={h.id} value={h.id}>{h.name}</option>
      ))}
    </select>
  </div>
);

const HeroCard = ({ hero }) => (
  <div className="compare-hero-card">
    <div className="compare-img-wrap">
      <img src={hero.img} alt={hero.name} className="compare-img" loading="lazy" />
      <div className="compare-img-overlay" />
      <span className={`compare-badge ${badgeClass(hero.category)}`}>{hero.category}</span>
    </div>
    <div className="compare-info">
      <h2 className="compare-hero-name">{hero.name}</h2>
      <p className="compare-hero-desc">{hero.description}</p>
      <div className="compare-hero-meta">
        <span className="compare-rating">★ {hero.rating}</span>
        <span className="compare-year">Since {hero.date}</span>
      </div>
    </div>
    <div className="compare-powers">
      <h3 className="compare-powers-title">Powers</h3>
      <ul className="compare-powers-list">
        {hero.powers.map((p, i) => (
          <li key={i} className="compare-power-item">
            <span className="compare-power-dot" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ComparePage = () => {
  const [heroAId, setHeroAId] = useState(null);
  const [heroBId, setHeroBId] = useState(null);

  const heroA = heroes.find(h => h.id === heroAId);
  const heroB = heroes.find(h => h.id === heroBId);

  const winnerRating = heroA && heroB
    ? heroA.rating > heroB.rating ? 'A'
    : heroA.rating < heroB.rating ? 'B'
    : 'tie'
    : null;

  return (
    <main className="compare-page">
      <div className="compare-header">
        <h1 className="compare-title">Hero Comparison</h1>
        <p className="compare-sub">Pick two heroes and see how they match up</p>
      </div>

      {/* Pickers */}
      <div className="compare-pickers">
        <HeroPicker label="Hero A" selected={heroAId} onChange={setHeroAId} />
        <div className="compare-vs">VS</div>
        <HeroPicker label="Hero B" selected={heroBId} onChange={setHeroBId} />
      </div>

      {/* Winner banner */}
      {winnerRating && (
        <div className={`compare-winner-banner ${winnerRating === 'tie' ? 'tie' : ''}`}>
          {winnerRating === 'tie'
            ? "⚖️ It's a tie!"
            : `🏆 ${winnerRating === 'A' ? heroA.name : heroB.name} wins by rating!`}
        </div>
      )}

      {/* Cards */}
      {(heroA || heroB) && (
        <div className="compare-grid">
          {heroA
            ? <div className={`compare-slot ${winnerRating === 'A' ? 'winner' : ''}`}>
                {winnerRating === 'A' && <div className="winner-crown">👑 Winner</div>}
                <HeroCard hero={heroA} />
              </div>
            : <div className="compare-slot empty-slot"><span>Select Hero A</span></div>
          }
          {heroB
            ? <div className={`compare-slot ${winnerRating === 'B' ? 'winner' : ''}`}>
                {winnerRating === 'B' && <div className="winner-crown">👑 Winner</div>}
                <HeroCard hero={heroB} />
              </div>
            : <div className="compare-slot empty-slot"><span>Select Hero B</span></div>
          }
        </div>
      )}

      {!heroA && !heroB && (
        <div className="compare-placeholder">
          <div className="compare-ph-icon">⚔️</div>
          <p>Select two heroes above to compare them</p>
        </div>
      )}

      {/* Rating bar comparison */}
      {heroA && heroB && (
        <div className="compare-stats-section">
          <h2 className="compare-stats-title">Rating Comparison</h2>
          {[
            { label: 'Rating', a: heroA.rating, b: heroB.rating, max: 5 },
            { label: 'Powers Count', a: heroA.powers.length, b: heroB.powers.length, max: 8 },
            { label: 'Experience (years since debut)', a: 2026 - Number(heroA.date), b: 2026 - Number(heroB.date), max: 30 },
          ].map(stat => {
            const aW = (stat.a / stat.max) * 100;
            const bW = (stat.b / stat.max) * 100;
            return (
              <div key={stat.label} className="compare-stat-row">
                <span className="csr-a-val">{stat.a}</span>
                <div className="csr-bars">
                  <div className="csr-label">{stat.label}</div>
                  <div className="csr-track">
                    <div className="csr-bar csr-bar-a" style={{ width: `${aW}%` }} />
                  </div>
                  <div className="csr-track">
                    <div className="csr-bar csr-bar-b" style={{ width: `${bW}%` }} />
                  </div>
                </div>
                <span className="csr-b-val">{stat.b}</span>
              </div>
            );
          })}
          <div className="csr-legend">
            <span className="csr-dot-a" /> {heroA.name}
            <span className="csr-dot-b" /> {heroB.name}
          </div>
        </div>
      )}
    </main>
  );
};

export default ComparePage;
