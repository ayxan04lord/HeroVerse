import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="nf-page">
    <div className="nf-code">404</div>
    <h2 className="nf-title">Page Not Found</h2>
    <p className="nf-text">Looks like this universe doesn't exist yet.</p>
    <Link to="/" className="nf-btn">← Back to HeroVerse</Link>
  </div>
);

export default NotFoundPage;
