import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';
import '../App.css';

//Does the client have paramedical benefits available?
const paramedicalOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' }
];
const coinsuranceLevelOptions = {
  Yes: [
    { value: '100', label: '100' },
    { value: '90', label: '90' },
    { value: '80', label: '80' },
    { value: '70', label: '70' }
  ],
  No: [{ value: 'N/A', label: 'N/A' }]
};

const Benefits = ({ handleSubmit }) => {
  const [selectedParamedical, setSelectedParamedical] = useState(null);
  const [selectedCoinsuranceLevelOptions, setSelectedCoinsuranceLevel] =
    useState(null);

  const handleParamedicalChange = (selectedParamedicalOption) => {
    setSelectedParamedical(selectedParamedicalOption);
    console.log(selectedParamedicalOption);
  };

  const handleSelectedCoinsuranceLevelOptions = (
    selectedCoinsuranceLevelOptions
  ) => {
    setSelectedCoinsuranceLevel(selectedCoinsuranceLevelOptions);
    console.log(selectedCoinsuranceLevelOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'flex', margin: 20 }}>
        <h2>Benefit Booklet Form for Companies/Employees</h2>
      </label>
      {/* Does the client have paramedical benefits available? */}
      <div>
        <div style={{ width: 600, marginBottom: 20, margin: 20 }}>
          <b>Does the client have paramedical benefits available?</b>
          <Select
            options={paramedicalOptions}
            onChange={handleParamedicalChange}
            value={selectedParamedical}
          />
        </div>
        {selectedParamedical && (
          <div style={{ width: 600, marginBottom: 20, margin: 20 }}>
            <b>What is the coinsurance level (%)?</b>
            <Select
              options={coinsuranceLevelOptions[selectedParamedical.value]}
              onChange={handleSelectedCoinsuranceLevelOptions}
              value={selectedCoinsuranceLevelOptions}
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        variant="contained"
        style={{ display: 'flex', margin: 20, width: 200 }}
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default Benefits;
