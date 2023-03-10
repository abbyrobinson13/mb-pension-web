import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminNavBar() {
  return (
    <div className="Nav-Container">
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/adminhome">
              <span>Home Admin </span>
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown-content">
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
              <span> Add New Company </span>
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/addcontent">
              <span> Add Content </span>
            </NavLink>
          </div>
        </li>

        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/">
              <span> Log Out </span>
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export const LayoutAdminNavBar = ({ children }) => {
  return (
    <div className="Layout-Container">
      <AdminNavBar />
      <div className="Content-Container">{children}</div>
    </div>
  );
};
