import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState();
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

  if (!employee) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      <nav className="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h2>Employee Detail</h2>
        </div>
      </nav>
      <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500 }}>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {bull}Employee's First Name is : {employee.firstName}
          </Typography>
          <br />
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {bull}Employee's Last Name is : {employee.lastName}
          </Typography>
          <br />
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {bull}Gender is : {employee.gender}
          </Typography>
          <br />
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {bull} Date Of Birth is : {employee.dateOfBirth}
          </Typography>
          <br />
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {bull} Email is : {employee.email}
          </Typography>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            <Link to="/employeelist">
              <Button className="btn btn-primary" aria-pressed="true" size="sm">
                Back to List
              </Button>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeeDetail;
