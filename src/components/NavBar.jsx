import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="Nav-Container">
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/">
              <span> Home </span>
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/companies">
              <span>Companies</span>
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/favorites">Favorites</NavLink>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/employees">
              <span> Employees </span>
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/profile">
              <span> Profile </span>
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
