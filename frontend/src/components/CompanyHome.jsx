import React from 'react';
import CompanyNavBar from './CompanyNavBar';
import { NavLink } from 'react-router-dom';

function CompanyHome() {
  return (
    <div className="Admin-Container">
      <nav>
        <h1>Company Dashboard</h1>
      </nav>
      <div className="Button-Container">
        <NavLink to="/addbenefits">
          <img
            src="../images/stats-benefits.jpg"
            alt="a laptop with charts"
          />
          <span>Benefits</span>
        </NavLink>
        <NavLink to="/employeelist">
          <img src="/images/employees-company-dashboard.jpg" alt="cubicles" />
          <span> Employees </span>
        </NavLink>
        <NavLink to="/profile">
          <img src="/images/profile.jpg" alt="creating a profile" />
          <span> Profile </span>
        </NavLink>
      </div>
    </div>
    // <div>
    //   <CompanyNavBar />
    //   <h1> Company Home Page </h1>
    // </div>
  );
}

export default CompanyHome;
