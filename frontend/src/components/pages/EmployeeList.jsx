import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EmployeeDetail = (props) => {
  const employee = props.employee;
  const { firstName, lastName, gender, dateOfBirth, email, } = employee;
  return (
    <div>
      <p>First Name:</p>
      <p>{firstName}</p>
      <p>Last Name:</p>
      <p>{lastName}</p>
      <p>Gender:</p>
      <p>{gender}</p>
      <p>Date Of Birth</p>
      <p>{dateOfBirth}</p>
      <p>Email:</p>
      <p>{email}</p>
      </div>
  );
};
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch("/api/employee");
      const employeesData = await response.json();
      setEmployees(employeesData);
    };
    getEmployees();
  }, []);
  return (
    <div>
      <nav className= "bg-dark navbar-dark navbar">
        <div className ="row col-12 d-flex justify-content-center text-white">
            <h2>List Of Employees</h2>
        </div>
    </nav>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >Date Of Birth</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.firstName}
              </TableCell>
              <TableCell >{employee.lastName}</TableCell>
              <TableCell >{employee.gender}</TableCell>
              <TableCell >{employee.dateOfBirth}</TableCell>
              <TableCell >{employee.department}</TableCell>
              <TableCell align="left">{employee.email}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default EmployeeList;