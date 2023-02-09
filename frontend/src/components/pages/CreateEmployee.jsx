import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../shared/EmployeeForm';
import Button from 'react-bootstrap/esm/Button';

function CreateEmployee() {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (employee) => {
    alert('Form submitted');
    setConfirmSubmit(true);
    navigate('/employeelist');

    const response = await fetch('/api/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    const newEmployee = await response.json();
    console.log(newEmployee);
  };
  return (
    <EmployeeForm handleSubmit={handleSubmit} buttonText="Add New Employee" />
  );
}

export default CreateEmployee;
