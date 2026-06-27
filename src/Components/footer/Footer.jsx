import { Link } from 'react-router-dom';
import { heroes, categories } from '../../data/heroes';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const universes = categories.filter(c => c !== 'All');

  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-top-inner">
          <span className="footer-top-text">⚡ The ultimate superhero database</span>
          <Link to="/" className="footer-top-btn">Explore Now</Link>
        </div>
      </div>

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-col footer-col--brand">
          <Link to="/" className="footer-brand">HERO<span>VERSE</span></Link>
          <p className="footer-tagline">Your gateway to every hero, villain, and legend across the multiverse.</p>
          <div className="footer-stats">
            <div className="footer-stat">
              <strong>{heroes.length}</strong>
              <span>Heroes</span>
            </div>
            <div className="footer-stat-sep" />
            <div className="footer-stat">
              <strong>{universes.length}</strong>
              <span>Universes</span>
            </div>
            <div className="footer-stat-sep" />
            <div className="footer-stat">
              <strong>{Math.max(...heroes.map(h => h.rating))}</strong>
              <span>Top Rating</span>
            </div>
          </div>
        </div>

        {/* Universes */}
        <div className="footer-col">
          <h4 className="footer-col-title">Universes</h4>
          <ul className="footer-col-list">
            {universes.map(cat => (
              <li key={cat}>
                <Link to={`/universe/${cat}`} className="footer-link">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigate */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigate</h4>
          <ul className="footer-col-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/favorites" className="footer-link">♥ Favourites</Link></li>
            <li><Link to="/compare" className="footer-link">⚔️ Compare</Link></li>
            <li><a href="#heroes" className="footer-link">All Heroes</a></li>
          </ul>
        </div>

        {/* Social + newsletter */}
        <div className="footer-col">
          <h4 className="footer-col-title">Follow Us</h4>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
          </div>
          <p className="footer-newsletter-label">Stay updated</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="your@email.com" aria-label="Email for newsletter" />
            <button type="button">→</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">© {year} HeroVerse. All characters are property of their respective owners.</p>
          <div className="footer-bottom-links">
            <Link to="/compare">Compare</Link>
            <Link to="/favorites">Favourites</Link>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
