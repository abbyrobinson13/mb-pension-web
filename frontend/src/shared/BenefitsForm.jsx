import React, {useState} from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';
import '../App.css';

//Does the client have paramedical benefits available?

export default function BenefitsForm () {
  const [companyName, setCompanyName] = useState ('');
  const [paramedical, setParamedical] = useState ('');
  const [coinsuranceParamedical, setCoinsuranceParamedical] = useState ('');
  const [practitionerAnnualMax, setPractitionerAnnualMax] = useState ('');
  const [
    practitionerAnnualMaxAmount,
    setPractitionerAnnualMaxAmount,
  ] = useState ('');
  const [perVisitMax, setPerVisitMax] = useState ('');
  const [perVisitMaxAmount, setPerVisitMaxAmount] = useState ('');
  const [perVisitMaxToAllServices, setPerVisitMaxToAllServices] = useState ('');
  const [perVisitMaxServices, setPerVisitMaxServices] = useState ('');
  const [paramedDependent, setParamedDependent] = useState ('');
  const [familyOrEmployeeOnly, setFamilyOrEmployeeOnly] = useState ('');
  const [insuranceCompany, setInsuranceCompany] = useState ('');

  //Does the company/ client have paramedical benefits available?
  const paramedicalOptions = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const coinsuranceParamedicalOptions = {
    Yes: [
      {value: '100', label: '100%'},
      {value: '90', label: '90%'},
      {value: '80', label: '80%'},
      {value: '70', label: '70%'},
    ],
    No: [{value: 'N/A', label: 'N/A'}],
  };

  //Annual Maximums
  const practitionersAnnualMaximums = [
    {value: 'Per Practitioner', label: 'Per Practitioner'},
    {value: 'Combined', label: 'Combined'},
  ];
  const practitionersAnnualMaxAmounts = {
    'Per Practitioner': [
      {value: '300', label: '$300'},
      {value: '500', label: '$500'},
      {value: '750', label: '$750'},
      {value: '1,000', label: '$1,000'},
      {value: '1,500', label: '$1,500'},
    ],
    Combined: [
      {value: '500', label: '$500'},
      {value: '750', label: '$750'},
      {value: '1,000', label: '$1,000'},
      {value: '1,250', label: '$1,250'},
      {value: '1,500', label: '$1,500'},
    ],
  };
  //Maximums Per Visit
  const areMaxPerVisit = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const maxAmountPerVisit = {
    Yes: [
      {value: '25', label: '$25'},
      {value: '30', label: '$30'},
      {value: '35', label: '$35'},
      {value: '40', label: '$40'},
      {value: '45', label: '$45'},
      {value: '50', label: '$50'},
    ],
    No: [{value: 'N/A', label: 'N/A'}],
  };
  //Does the per visit maximum apply to all services?
  const doesPerVisitMaxToAllServices = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const perVisitMaxServicesOptions = {
    Yes: [{value: 'N/A', label: 'N/A'}],
    No: [
      {value: 'Acupuncturist', label: 'Acupuncturist'},
      {value: 'Audiologist', label: 'Audiologist'},
      {value: 'Chiropractor', label: 'Chiropractor'},
      {value: 'Dietician', label: 'Dietician'},
      {value: 'Massage Therapist', label: 'Massage Therapist'},
      {value: 'Osteopath', label: 'Osteopath'},
      {value: 'Physiotherapist', label: 'Physiotherapist'},
      {value: 'Psychologist', label: 'Psychologist'},
    ],
  };
  //Do paramedical benefits extend to all dependents?
  const paramedicalDependents = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
  ];
  const familyOrEmployeeMax = {
    No: [
      {value: 'Family maximum', label: 'Family maximum'},
      {value: 'Employee only maximum', label: 'Employee only maximum'},
    ],
    Yes: [{value: 'N/A', label: 'N/A'}],
  };
  //Paramedical set of practitioners by insurance company
  const insuranceCompanies = [
    {value: 'Alberta Blue Cross', label: 'Alberta Blue Cross'},
    {value: 'Canada Life', label: 'Canada Life'},
    {value: 'Equitable Life', label: 'Equitable Life'},
    {value: 'Manulife', label: 'Manulife'},
    {value: 'RBC', label: 'RBC'},
    {value: 'Sunlife', label: 'Sunlife'},
  ];

  const handleSubmit = async e => {
    e.preventDefault ();
    const benefits = {
      companyName,
      paramedical,
      coinsuranceParamedical,
      practitionerAnnualMax,
      practitionerAnnualMaxAmount,
      perVisitMax,
      perVisitMaxAmount,
      perVisitMaxToAllServices,
      perVisitMaxServices,
      paramedDependent,
      familyOrEmployeeOnly,
      insuranceCompany,
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
  const handlePractAnnualMaxChange = selectedPractAnnualMaxOption => {
    setPractitionerAnnualMax (selectedPractAnnualMaxOption);
  };
  const handlePractAnnMaxAmountChange = selectedPractAnnMaxAmountOption => {
    setPractitionerAnnualMaxAmount (selectedPractAnnMaxAmountOption);
  };
  const handleMaxPerVisitChange = selectedMaxPerVisitOption => {
    setPerVisitMax (selectedMaxPerVisitOption);
  };
  const handlePerVisitMaxAmountChange = selectedPerVisitMaxAmountOption => {
    setPerVisitMaxAmount (selectedPerVisitMaxAmountOption);
  };
  const handlePerVisitMaxToAllChange = selectedPerVisitMaxToAllOption => {
    setPerVisitMaxToAllServices (selectedPerVisitMaxToAllOption);
  };
  const handlePerVisitMaxServicesChoices = selectedPerVisitMaxServices => {
    setPerVisitMaxServices (selectedPerVisitMaxServices);
  };
  const handleParamedDependentsChange = selectedParamedDependentsOption => {
    setParamedDependent (selectedParamedDependentsOption);
  };
  const handleFamilyOrEmployeeChange = selectedFamilyOrEmployeeOnly => {
    setFamilyOrEmployeeOnly (selectedFamilyOrEmployeeOnly);
  };
  const handleInsuranceCompanyChange = selectedInsuranceCompanyOption => {
    setInsuranceCompany (selectedInsuranceCompanyOption);
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
        {/* How are the Annual Maximums Structured? */}
        <div>
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>Annual maximums Per Practitioner or Combined?</b>
            <Select
              options={practitionersAnnualMaximums}
              onChange={handlePractAnnualMaxChange}
              value={practitionerAnnualMax}
            />
          </div>
          {practitionerAnnualMax &&
            <div style={{width: 600, marginBottom: 20, margin: 20}}>
              <b>Practitioner's annual maximums ($)?</b>
              <Select
                options={
                  practitionersAnnualMaxAmounts[practitionerAnnualMax.value]
                }
                onChange={handlePractAnnMaxAmountChange}
                value={practitionerAnnualMaxAmount}
              />
            </div>}
        </div>
      </div>
      {/* Maximums per Visit */}
      <div>
        <div style={{width: 600, marginBottom: 20, margin: 20}}>
          <b>Are there any maximums per visit?</b>
          <Select
            options={areMaxPerVisit}
            onChange={handleMaxPerVisitChange}
            value={perVisitMax}
          />
        </div>
        {perVisitMax &&
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>What is the per visit maximum ($)?</b>
            <Select
              options={maxAmountPerVisit[perVisitMax.value]}
              onChange={handlePerVisitMaxAmountChange}
              value={perVisitMaxAmount}
            />
          </div>}
      </div>
      {/* Does the per visit maximum apply to all services? */}
      <div>
        <div style={{width: 600, marginBottom: 20, margin: 20}}>
          <b>Does the per visit maximum apply to all services?</b>
          <Select
            options={doesPerVisitMaxToAllServices}
            onChange={handlePerVisitMaxToAllChange}
            value={perVisitMaxToAllServices}
          />
        </div>
        {perVisitMaxToAllServices &&
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>
              What paramedical services does the per visit maximum apply to? (up to 3)
            </b>
            <Select
              options={
                perVisitMaxServicesOptions[perVisitMaxToAllServices.value]
              }
              onChange={handlePerVisitMaxServicesChoices}
              value={perVisitMaxServices}
            />
          </div>}
      </div>
      {/* Do paramedical benefits extend to all dependents? */}
      <div>
        <div style={{width: 600, marginBottom: 20, margin: 20}}>
          <b>Do paramedical benefits extend to all dependents?</b>
          <Select
            options={paramedicalDependents}
            onChange={handleParamedDependentsChange}
            value={paramedDependent}
          />
        </div>
        {paramedDependent &&
          <div style={{width: 600, marginBottom: 20, margin: 20}}>
            <b>Family maximum vs Employee only maximum?</b>
            <Select
              options={familyOrEmployeeMax[paramedDependent.value]}
              onChange={handleFamilyOrEmployeeChange}
              value={familyOrEmployeeOnly}
            />
          </div>}
      </div>
      {/*Paramedical set of practitioners by insurance carrier*/}
      <div>
        <div style={{width: 600, marginBottom: 20, margin: 20}}>
          <b>Paramedical set of practitioners by insurance carrier</b>
          <Select
            options={insuranceCompanies}
            onChange={handleInsuranceCompanyChange}
            value={insuranceCompany}
          />
        </div>
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
