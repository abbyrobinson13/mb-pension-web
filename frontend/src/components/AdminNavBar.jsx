import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminNavBar() {
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
              <span>View All Companies</span>
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/employees">Upload New Employee CSV</NavLink>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/createcompany">
              <span> Add New Company/Broker </span>
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
}

export default AdminNavBar;
