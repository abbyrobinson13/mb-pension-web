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
    <nav>
      <h1>Admin Dashboard</h1>
      </nav>
      <div className="Button-Container" >
        <NavLink to="/companies" >
      <img src="/images/ViewCompany.jpg" alt="Image 1" />
          <span>View All Companies</span>
        </NavLink>
        <NavLink to="/createcompany">
        <img src="/images/Add.jpg" alt="Image 2" />
          <span> Add New Company/Broker </span>
        </NavLink>
        <NavLink to="/addcontent">
           <img src="/images/AddContent.jpg"  alt="Image 3" />
          <span> Add Content </span>
        </NavLink>
        
      </div>
    </div>
  );
}

export default AdminHome;
