import React, { useEffect, useState, useContext } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../AuthContext.js';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const EmployeeList = () => {
  const usersCollectionRef = collection(db, 'companies');
  const { user } = useContext(AuthContext);
  console.log(user);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  console.log('id is', id);

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete ?`)) {
      const response = await fetch(`/api/employee/${id}`, {
        method: 'DELETE'
      });
      const deletedEmployee = await response.json();
      console.log(deletedEmployee);
      navigate(0);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch('/api/employee');
      const employeesData = await response.json();
      console.log(employeesData);
      setEmployees(employeesData);

      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
      setIsLoading(false);
    };

    getData();
  }, []);

  console.log(users);

  const userProfile =
    users.length > 0
      ? users.filter(
          (e) => e.email === user.email || e.brokerEmail === user.email
        )[0]
      : null;

  return (
    <>
      {isLoading ? (
        <h1> loading ...</h1>
      ) : (
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
                <th>Employee Number</th>
                <th>Company Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
                <th>Email</th>
                <th>Policy Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees
                .filter((employee) => userProfile.name === employee.companyName)
                .map((employee) => {
                  return (
                    <tr key={employee.employeeNumber}>
                      <td>{employee.employeeNumber} </td>
                      <td>{employee.companyName} </td>
                      <td>{employee.firstName} </td>
                      <td>{employee.lastName} </td>
                      <td>{employee.gender} </td>
                      <td>{employee.dateOfBirth} </td>
                      {/* <td>
                  {employee.dateOfBirth &&
                    format(new Date(employee.dateOfBirth), 'yyyy-MM-dd')}{' '}
                </td> */}
                      {/* "{console.log('dateofbirth', new Date(employee.dateOfBirth))} */}
                      <td>{employee.email} </td>
                      <td>{employee.policyNumber} </td>
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
                          onClick={() => {
                            handleDelete(employee._id);
                          }}
                        >
                          Delete
                        </Button>
                        &nbsp;
                        <Link to={`/detail/${employee._id}`}>
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
      )}
    </>
  );
};
export default EmployeeList;
