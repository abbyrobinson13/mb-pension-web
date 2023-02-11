import React, {useState} from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';
import '../App.css';

//Does the client have paramedical benefits available?

export default function BenefitsForm () {
  const [companyName, setCompanyName] = useState ('');
  const [paramedical, setParamedical] = useState ('');
  const [coinsuranceParamedical, setCoinsuranceParamedical] = useState ('');

  const paramedicalOptions = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const coinsuranceParamedicalOptions = {
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
      paramedical,
      coinsuranceParamedical,
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
    setParamedical (selectedParamedicalOption);
    console.log (selectedParamedicalOption);
  };

  const handleCoinsuranceParamedicalChange = selectedCoinsuranceParamedicalOptions => {
    setCoinsuranceParamedical (selectedCoinsuranceParamedicalOptions);
    console.log (selectedCoinsuranceParamedicalOptions);
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
            style={{width: 700, height: 40, display: 'flex'}}
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
            value={paramedical}
          />
        </div>
        {paramedical &&
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>What is the coinsurance level (%)?</b>
            <Select
              options={coinsuranceParamedicalOptions[paramedical.value]}
              onChange={handleCoinsuranceParamedicalChange}
              value={coinsuranceParamedical}
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
