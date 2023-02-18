import React from 'react';
import CompanyNavBar from './CompanyNavBar';
import { NavLink } from 'react-router-dom';


function CompanyHome() {
  return (
    <div className="Admin-Container">
    <nav>
      <h1>Company Dashboard</h1>
      </nav>
      <div className="Button-Container" >
        <NavLink to="/addbenefits" >
      {/* <img src="../images/resized-benefits-for-employees.jpg" alt="man caring boxes of stress" />*/}
          <span>Benefits Form for Employees</span>
        </NavLink>
        <NavLink to="/upload">
        {/* <img src="/images/upload-document.jpg" alt="Image 2" /> */}
          <span> Upload a Document </span>
        </NavLink>
        <NavLink to="/employeelist">
           {/* <img src="/images/add-employee.jpg"  alt="Image 3" /> */}
          <span> Add Employee/ Display </span>
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
