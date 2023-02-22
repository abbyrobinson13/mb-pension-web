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
            src="../images/notebook-plant.jpg"
            alt="notebook pencils and plant"
          />
          <span>Benefits Form</span>
        </NavLink>
        <NavLink to="/upload">
          <img src="/images/screen-upload.jpg" alt="Image 2" />
          <span> Upload a Document </span>
        </NavLink>
        <NavLink to="/employeelist">
          <img src="/images/new-hired.jpg" alt="Image 3" />
          <span> View Employees </span>
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
