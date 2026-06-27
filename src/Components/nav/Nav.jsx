import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { categories, heroes } from '../../data/heroes';
import { useTheme } from '../../contexts/ThemeContext';
import { useFavorites } from '../../contexts/FavoritesContext';
import './Nav.css';

const Nav = ({ search, onSearch, activeCategory, onCategoryChange }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';
  const { theme, toggle: toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRandom = () => {
    const random = heroes[Math.floor(Math.random() * heroes.length)];
    navigate(`/hero/${random.id}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon">⚡</span>
          <span className="brand-text">HERO<span>VERSE</span></span>
        </Link>

        {/* Desktop: search + filters */}
        {isHome && (
          <div className="navbar-search">
            <span className="search-icon">🔍</span>
            <input
              type="search"
              placeholder="Search heroes..."
              value={search}
              onChange={e => onSearch(e.target.value)}
              aria-label="Search heroes"
            />
          </div>
        )}

        {isHome && (
          <nav className="navbar-filters" aria-label="Category filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => onCategoryChange(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </nav>
        )}

        {!isHome && (
          <Link to="/" className="nav-back-btn">← Back to Heroes</Link>
        )}

        {/* Right actions */}
        <div className="navbar-actions">
          <button
            className="nav-icon-btn"
            onClick={handleRandom}
            title="Surprise Me — random hero"
            aria-label="Go to a random hero"
          >
            🎲
          </button>

          <NavLink
            to="/favorites"
            className={({ isActive }) => `nav-icon-btn nav-fav-btn ${isActive ? 'active' : ''}`}
            title="Favourites"
            aria-label="View favourites"
          >
            ♥
            {favorites.length > 0 && (
              <span className="fav-count">{favorites.length}</span>
            )}
          </NavLink>

          <button
            className="nav-icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer" aria-label="Mobile navigation">
          {isHome && (
            <>
              <div className="drawer-search">
                <span className="search-icon">🔍</span>
                <input
                  type="search"
                  placeholder="Search heroes..."
                  value={search}
                  onChange={e => onSearch(e.target.value)}
                  aria-label="Search heroes"
                />
              </div>
              <div className="drawer-filters">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => { onCategoryChange(cat); setMenuOpen(false); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </>
          )}
          <nav className="drawer-links">
            <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
            <Link to="/favorites" onClick={() => setMenuOpen(false)}>♥ Favourites {favorites.length > 0 && `(${favorites.length})`}</Link>
            <button onClick={() => { handleRandom(); setMenuOpen(false); }}>🎲 Surprise Me</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
