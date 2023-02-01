import React from 'react';
import { NavLink } from 'react-router-dom';

function BrokerNavBar() {
    
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

export default BrokerNavBar;