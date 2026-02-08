import { NavLink } from 'react-router-dom';
import Avatar from '../../ui/Avatar';
import { CloseIcon } from '../../../assets/icons';
import './Sidebar.css';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/perspectives', label: 'Perspectives' },
  { path: '/tasks', label: 'Tasks' },
  { path: '/documents', label: 'Documents' },
  { path: '/reports', label: 'Reports' },
  { path: '/users', label: 'Users & Roles' },
];

export default function Sidebar({ isOpen = false, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar__overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar__header">
          <h1 className="sidebar__logo">TAHWUL</h1>
          <button
            onClick={onClose}
            className="sidebar__close-btn"
            aria-label="Close menu"
          >
            <CloseIcon className="sidebar__close-icon" />
          </button>
        </div>
        <nav className="sidebar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose?.()}
              className={({ isActive }) =>
                `sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      
      </aside>
    </>
  );
}
