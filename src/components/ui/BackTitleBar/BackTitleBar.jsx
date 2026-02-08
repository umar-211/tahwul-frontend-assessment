import { Link } from 'react-router-dom';
import './BackTitleBar.css';

export default function BackTitleBar({ title, to = '/' }) {
  return (
    <nav className="back-title-bar" aria-label="Breadcrumb">
      <Link to={to} className="back-title-bar__link" aria-label="Go back">
        <span className="back-title-bar__arrow">←</span>
        <span className="back-title-bar__title">{title}</span>
      </Link>
    </nav>
  );
}
