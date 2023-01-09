import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  //const LoadEdit = (id) => {};

  const RemoveEmployee = (id) => {};

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch('/api/employee');
      const employeesData = await response.json();
      setEmployees(employeesData);
    };
    getEmployees();
  }, []);

  return (
    <>
      <div className="position-absolute mid-left">
        <Link to="/createnewemployee">
          <Button
            className="btn btn-success"
            size="md"
            textAlign="left"
            aria-pressed="true"
          >
            Add New (+)
          </Button>
        </Link>
      </div>
      <div className="col-lg-12">
        <h2>List Of Employees</h2>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.firstName}>
                <td>{employee.firstName} </td>
                <td>{employee.lastName} </td>
                <td>{employee.gender} </td>
                <td>{employee.dateOfBirth} </td>
                <td>{employee.email} </td>
                <td>
                  <Link to={`/update/${employee._id}`}>
                    <Button
                      className="btn btn-success"
                      aria-pressed="true"
                      size="sm"
                    >
                      Edit
                    </Button>
                  </Link>
                  &nbsp;
                  <Button
                    className="btn btn-danger"
                    aria-pressed="true"
                    size="sm"
                    onClick={() => alert(employee.firstName)}
                  >
                    Delete
                  </Button>
                  &nbsp;
                  <Link to="/detail/:id">
                    <Button
                      className="btn btn-primary"
                      aria-pressed="true"
                      size="sm"
                    >
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default EmployeeList;

// const EmployeeDetail = (props) => {
//   const employee = props.employee;
//   const { firstName, lastName, gender, dateOfBirth, email } = employee;
//   return (
//     <div>
//       <p>First Name:</p>
//       <p>{firstName}</p>
//       <p>Last Name:</p>
//       <p>{lastName}</p>
//       <p>Gender:</p>
//       <p>{gender}</p>
//       <p>Date Of Birth</p>
//       <p>{dateOfBirth}</p>
//       <p>Email:</p>
//       <p>{email}</p>
//     </div>
//   );
// };
// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const getEmployees = async () => {
//       const response = await fetch('/api/employee');
//       const employeesData = await response.json();
//       setEmployees(employeesData);
//     };
//     getEmployees();
//   }, []);
//   return (
//     <div>
//       <nav className="bg-dark navbar-dark navbar">
//         <div className="row col-12 d-flex justify-content-center text-white">
//           <h2>List Of Employees</h2>
//         </div>
//       </nav>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Date Of Birth</TableCell>
//               <TableCell align="right">Email</TableCell>
//               <TableCell align="right">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employees.map((employee) => (
//               <TableRow
//                 key={employee.firstName}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {employee.firstName}
//                 </TableCell>
//                 <TableCell>{employee.lastName}</TableCell>
//                 <TableCell>{employee.gender}</TableCell>
//                 <TableCell>{employee.dateOfBirth}</TableCell>
//                 <TableCell>{employee.department}</TableCell>
//                 <TableCell align="left">{employee.email}</TableCell>
//                 <TableCell align="left">
//                   <Link to={`/detail/${employee._id}`}>Go to Detail</Link>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default EmployeeList;
