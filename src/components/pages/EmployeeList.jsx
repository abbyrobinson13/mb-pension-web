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
  const { firstName, lastName, gender, birthDate, department, 
    position,employmentDate, email,mobile,street, postalCode, city, province } = employee;
  return (
    <div>
      <p>First Name:</p>
      <p>{firstName}</p>
      <p>Last Name:</p>
      <p>{lastName}</p>
      <p>Gender:</p>
      <p>{gender}</p>
      <p>Birth Date</p>
      <p>{birthDate}</p>
      <p>Department:</p>
      <p>{department}</p>
      <p>Position:</p>
      <p>{position}</p>
      <p>Employment Date</p>
      <p>{employmentDate}</p>
      <p>Email:</p>
      <p>{email}</p>
      <p>Mobile:</p>
      <p>{mobile}</p>
      <p>Street:</p>
      <p>{street}</p>
      <p>Postal Code:</p>
      <p>{postalCode}</p>
      <p>City:</p>
      <p>{city}</p>
      <p>Province:</p>
      <p>{province}</p>
      </div>
  );
};
      const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch("/api/employee/list");
      const employeesData = await response.json();
      setEmployees(employeesData);
    };
    getEmployees();
  }, []);
  return (
    <div>
      <h2>List of Employees</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Birth Date</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Employment Date</TableCell>
            <TableCell align="right">Dependents</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">Postal Code</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Province</TableCell>
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
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.gender}</TableCell>
              <TableCell align="right">{employee.birthDate}</TableCell>
              <TableCell align="right">{employee.department}</TableCell>
              <TableCell align="right">{employee.position}</TableCell>
              <TableCell align="right">{employee.employmentDate}</TableCell>
              <TableCell align="right">{employee.dependents}</TableCell>
              <TableCell align="right">{employee.email}</TableCell>
              <TableCell align="right">{employee.mobile}</TableCell>
              <TableCell align="right">{employee.street}</TableCell>
              <TableCell align="right">{employee.postalCode}</TableCell>
              <TableCell align="right">{employee.city}</TableCell>
              <TableCell align="right">{employee.province}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default EmployeeList;