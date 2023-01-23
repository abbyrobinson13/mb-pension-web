import React from 'react';
import './App.css';
import Form from './components/common/Form.js';
import { app } from './firebase-config.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import Home from './components/Home.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from './components/WelcomePage.jsx';
import Employees from './components/pages/employees.jsx';
import EmployeeList from './components/pages/EmployeeList.jsx';
import EmployeeForm from './shared/EmployeeForm.jsx';
import EmployeeDetail from './components/pages/EmployeeDetail.jsx';
import CreateEmployee from './components/pages/CreateEmployee.jsx';
import EmployeeUpdate from './components/pages/EmployeeUpdate.jsx';
import AdminHome from './components/AdminHome.jsx';
import CompanyHome from './components/CompanyHome.jsx';
import CompanyList from './components/CompanyList.jsx';
import { AuthProvider } from './AuthProvider.js';

//router added at root level so in can be used in the entire application

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
    }
  }, []);

  const handleAction = (id) => {
    const authentication = getAuth(app);
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home');
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home');
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        });
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/login"
            element={
              <Form
                title="Log In"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/createnewemployee" element={<CreateEmployee />} />
          <Route path="/detail/:id" element={<EmployeeDetail />} />
          <Route path="/companylist" element={<CompanyList />} />
          <Route path="/update/:id" element={<EmployeeUpdate />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/companyhome" element={<CompanyHome />} />
          <Route path="/companies" element={<CompanyList />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
