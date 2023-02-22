import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CompanyNavBar() {
  return (
    <div className="Nav-Container">
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/companyhome">
              <span> Company Home </span>
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/addbenefits">
              <span> Benefits </span>
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/addbenefits">Add Benefits</NavLink>
              </div>
              <div className="dropdown-content">
                <div className="second-dropdown">
                  <NavLink to="/upload">Upload Document</NavLink>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/employeelist">
              <span>View All Employees</span>
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/employees">Upload New Employee CSV</NavLink>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/createnewemployee">
              <span> Add New Employee </span>
            </NavLink>
          </div>
        </li> */}

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

export const LayoutCompanyNavBar = ({ children }) => {
  return (
    <div className="Layout-Container">
      <CompanyNavBar />
      <div className="Content-Container">{children}</div>
    </div>
  );
};
