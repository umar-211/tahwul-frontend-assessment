import Avatar from '../../ui/Avatar';
import { MenuIcon, SearchIcon, BellIcon, ChevronDownIcon } from '../../../assets/icons';
import './Header.css';

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button
        type="button"
        onClick={onMenuClick}
        className="header__menu-btn lg:hidden"
        aria-label="Toggle sidebar"
      >
        <MenuIcon className="header__menu-icon" aria-hidden />
      </button>
      <div className="header__search">
        <SearchIcon className="header__search-icon" />
        <input type="search" placeholder="Q Search" className="header__search-input" aria-label="Search" />
      </div>
      <div className="header__right">
        <button className="header__notifications" type="button" aria-label="Notifications">
          <BellIcon className="header__notifications-icon" />
          <span className="header__notifications-dot" aria-hidden />
        </button>
        <div className="header__user">
          <Avatar name="Umar Farooq" size="sm" iconOnly />
          <span className="header__user-name">Umar Farooq</span>
          <ChevronDownIcon className="header__user-chevron" />
        </div>
      </div>
    </header>
  );
}
