import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import {AuthProvider} from './AuthProvider.js';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Profile from './components/Profile.jsx';
import EditProfile from './components/EditProfile.jsx';
import PrivateRoute from './PrivateRoute.js';
import CreateCompany from './components/CreateCompany.jsx';
import AddContent from './components/AddContent.jsx';
import BenefitsForm from './shared/BenefitsForm.jsx';
import UploadForm from './shared/UploadForm.jsx';

//router added at root level so in can be used in the entire application

function App () {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/createnewemployee" element={<CreateEmployee />} />
          <Route path="/detail/:id" element={<EmployeeDetail />} />
          <Route path="/companylist" element={<CompanyList />} />
          <Route path="/update/:id" element={<EmployeeUpdate />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addbenefits" element={<BenefitsForm />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route
            path="/companyhome"
            element={
              <PrivateRoute>
                <CompanyHome />
              </PrivateRoute>
            }
          />

          <Route
            path="/createcompany"
            element={
              <PrivateRoute>
                <CreateCompany />
              </PrivateRoute>
            }
          />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/addcontent" element={<AddContent />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
