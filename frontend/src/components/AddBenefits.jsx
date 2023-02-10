import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BenefitsForm from '../shared/BenefitsForm';

function AddBenefits({}) {
  const [confirmSubmit, setConfirmSubmit] = useState (false);
  const navigate = useNavigate ();
  const handleSubmit = async benefits => {
    alert ('Form submitted');
    setConfirmSubmit (true);
    navigate ('/');

    const response = await fetch ('/api/benefits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (benefits),
    });
    const newBenefits = await response.json ();
    console.log (newBenefits);
  };
  return (
    <div>
      <BenefitsForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddBenefits;
