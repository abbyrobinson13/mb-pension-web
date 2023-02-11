import React, {useState} from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';
import '../App.css';

//Does the client have paramedical benefits available?

export default function BenefitsForm () {
  const [companyName, setCompanyName] = useState ('');
  const [selectedParamedical, setSelectedParamedical] = useState ('');
  const [selectedCoinsuranceLevel, setSelectedCoinsuranceLevel] = useState ('');

  const paramedicalOptions = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const coinsuranceLevelOptions = {
    Yes: [
      {value: '100', label: '100'},
      {value: '90', label: '90'},
      {value: '80', label: '80'},
      {value: '70', label: '70'},
    ],
    No: [{value: 'N/A', label: 'N/A'}],
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    const benefits = {
      companyName,
      selectedParamedical,
      selectedCoinsuranceLevel,
    };

    try {
      const response = await fetch ('/api/benefits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (benefits),
      });
      if (!response.ok) {
        throw new Error (response.statusText);
      }
      const newBenefits = await response.json ();
      console.log (newBenefits);
    } catch (error) {
      console.error (error);
    }
  };

  const handleParamedicalChange = selectedParamedicalOption => {
    setSelectedParamedical (selectedParamedicalOption);
    console.log (selectedParamedicalOption);
  };

  const handleSelectedCoinsuranceLevelOptions = selectedCoinsuranceLevelOptions => {
    setSelectedCoinsuranceLevel (selectedCoinsuranceLevelOptions);
    console.log (selectedCoinsuranceLevelOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{display: 'flex', margin: 20, justifyContent: 'center'}}>

        <h2>Benefit Booklet Form for Companies/Employees</h2>
      </label>
      <div>
        <label>
          <b>
            Add Company Name:
          </b>
          <input
            style={{width: 600, height: 30, display: 'flex'}}
            onChange={event => setCompanyName (event.target.value)}
            value={companyName}
          />
        </label>
      </div>

      {/* Does the client have paramedical benefits available? */}
      <div>
        <div style={{width: 600, marginBottom: 20, margin: 20}}>
          <b>Does the client have paramedical benefits available?</b>
          <Select
            options={paramedicalOptions}
            onChange={handleParamedicalChange}
            value={selectedParamedical}
          />
        </div>
        {selectedParamedical &&
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>What is the coinsurance level (%)?</b>
            <Select
              options={coinsuranceLevelOptions[selectedParamedical.value]}
              onChange={handleSelectedCoinsuranceLevelOptions}
              value={selectedCoinsuranceLevel}
            />
          </div>}
      </div>

      <Button
        type="submit"
        variant="contained"
        style={{display: 'flex', margin: 20, width: 200}}
      >
        SUBMIT
      </Button>
    </form>
  );
}
