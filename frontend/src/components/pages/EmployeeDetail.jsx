import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const EmployeeDetail = ({ id }) => {
  const [employee, setEmployee] = useState();
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
    <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {bull}
          {employee.firstName}
        </Typography>
        <br />
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {bull}
          {employee.lastName}
        </Typography>
        <br />
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {bull}
          {employee.gender}
        </Typography>
        <br />
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {bull}
          {employee.dateOfBirth}
        </Typography>
        <br />
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {bull}
          {employee.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeDetail;
