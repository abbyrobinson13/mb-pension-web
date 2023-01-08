import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from '../../shared/EmployeeForm';
import Button from 'react-bootstrap/esm/Button';

function EmployeeUpdate() {
  const [employee, setEmployee] = useState();
  //const [confirmSubmit, setConfirmSubmit] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log('id is', id);

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetch(`/api/employee/${id}`); 
      const data = await response.json();
      setEmployee(data);
      console.log(data);
    };
    getEmployee();
  }, [id]);

  const handleSubmit = async (employee) => {
    //setConfirmSubmit(true);
    navigate('/employeelist');

  const response = await fetch(`/api/employee/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
  });
  const newEmployee = await response.json();
  console.log(newEmployee);
  };

  return <EmployeeForm employee = {employee}  buttonText="Save" className="btn btn-danger"  />
}

export default EmployeeUpdate;
