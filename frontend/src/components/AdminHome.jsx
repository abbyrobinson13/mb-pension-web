import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar.jsx';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function AdminHome() {
  //   const handleLogout = () => {
  //     sessionStorage.removeItem('Auth Token');
  //     navigate('/');
  //   };
  //   let navigate = useNavigate();
  //   useEffect(() => {
  //     let authToken = sessionStorage.getItem('Auth Token');
  //     console.log(authToken);
  //     if (authToken) {
  //       navigate('/adminhome');
  //     }

  //     if (!authToken) {
  //       navigate('/register');
  //     }
  //   }, []);
  return (
   
    <div className="Admin-Container">
      <h1>Admin Dashboard</h1>
      <div className="Button-Container" >
        <NavLink to="/companies" >
          <span>View All Companies</span>
        </NavLink>
        <NavLink to="/createcompany">
          <span> Add New Company/Broker </span>
        </NavLink>
        <NavLink to="/addcontent">
          <span> Add Content </span>
        </NavLink>
        
      </div>
    </div>
  );
}

export default AdminHome;
