import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar.jsx';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <AdminNavBar />
      <h1>Admin Home Page</h1>
      {/* <button onClick={handleLogout}>Log out</button> */}
    </div>
  );
}

export default AdminHome;
