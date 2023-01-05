import React from 'react';
import { useState } from 'react';
import EmployeeDetail from './pages/EmployeeDetail';
import EmployeeList from './pages/EmployeeList';

const CompanyPortal = () => {
  const [employeeId, setEmployeeId] = useState('63b64dfe9bf9066aff8cb671');
  return (
    <div>
      
      <EmployeeDetail id={employeeId} />
      <EmployeeList setEmployeeId={setEmployeeId} />
    </div>
  );
};

export default CompanyPortal;
