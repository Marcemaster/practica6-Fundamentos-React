import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';
import AuthButton from '../auth/AuthButton';

function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          {
          // FALTA INCLUIR IMG
          }
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/adverts/new"
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          New Add
        </NavLink>
        <NavLink
          to="/adverts"
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          See all adverts
        </NavLink>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;