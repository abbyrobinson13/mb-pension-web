import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';
import '../App.css';
import { LayoutCompanyNavBar } from '../components/CompanyNavBar';


//Does the client have paramedical benefits available?

export default function BenefitsForm() {
  const [companyName, setCompanyName] = useState('');
  const [paramedical, setParamedical] = useState('');
  const [coinsuranceParamedical, setCoinsuranceParamedical] = useState('');
  const [practitionerAnnualMax, setPractitionerAnnualMax] = useState('');
  const [practitionerAnnualMaxAmount, setPractitionerAnnualMaxAmount] =
    useState('');
  const [staggered, setStaggered] = useState('');
  const [staggeredServices, setStaggeredServices] = useState('');
  const [perVisitMax, setPerVisitMax] = useState('');
  const [perVisitMaxAmount, setPerVisitMaxAmount] = useState('');
  const [perVisitMaxToAllServices, setPerVisitMaxToAllServices] = useState('');
  const [perVisitMaxServices, setPerVisitMaxServices] = useState('');
  const [paramedDependent, setParamedDependent] = useState('');
  const [familyOrEmployeeOnly, setFamilyOrEmployeeOnly] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [spendingAccount, setSpendingAccount] = useState('');
  const [spendingAccountKind, setSpendingAccountKind] = useState('');
  const [spendingAccountsAnnualAmount, setSpendingAccountsAnnualAmount] =
    useState('');
  const [drugsAnnualMax, setDrugsAnnualMax] = useState('');
  const [coinsuranceDrugs, setCoinsuranceDrugs] = useState('');
  const [drugsAnnualMaxAmount, setDrugsAnnualMaxAmount] = useState('');
  const [fertility, setFertility] = useState('');
  const [fertilityAmount, setFertilityAmount] = useState('');

  //Does the company/ client have paramedical benefits available?
  const paramedicalOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const coinsuranceParamedicalOptions = {
    Yes: [
      { value: '100', label: '100%' },
      { value: '90', label: '90%' },
      { value: '80', label: '80%' },
      { value: '70', label: '70%' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };

  //Annual Maximums
  const practitionersAnnualMaximums = [
    { value: 'Per Practitioner', label: 'Per Practitioner' },
    { value: 'Combined', label: 'Combined' }
  ];
  const practitionersAnnualMaxAmounts = {
    'Per Practitioner': [
      { value: '300', label: '$300' },
      { value: '500', label: '$500' },
      { value: '750', label: '$750' },
      { value: '1,000', label: '$1,000' },
      { value: '1,500', label: '$1,500' }
    ],
    Combined: [
      { value: '500', label: '$500' },
      { value: '750', label: '$750' },
      { value: '1,000', label: '$1,000' },
      { value: '1,250', label: '$1,250' },
      { value: '1,500', label: '$1,500' }
    ]
  };
  //Are there staggered maximums for any particular service?
  const staggeredMaximums = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const staggeredMaxServices = {
    No: [{ value: 'N/A', label: 'N/A' }],
    Yes: [
      { value: 'Acupuncturist', label: 'Acupuncturist' },
      { value: 'Audiologist', label: 'Audiologist' },
      { value: 'Chiropractor', label: 'Chiropractor' },
      { value: 'Dietician', label: 'Dietician' },
      { value: 'Massage Therapist', label: 'Massage Therapist' },
      { value: 'Osteopath', label: 'Osteopath' },
      { value: 'Physiotherapist', label: 'Physiotherapist' },
      { value: 'Psychologist', label: 'Psychologist' }
    ]
  };
  //Maximums Per Visit
  const areMaxPerVisit = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const maxAmountPerVisit = {
    Yes: [
      { value: '25', label: '$25' },
      { value: '30', label: '$30' },
      { value: '35', label: '$35' },
      { value: '40', label: '$40' },
      { value: '45', label: '$45' },
      { value: '50', label: '$50' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };
  //Does the per visit maximum apply to all services?
  const doesPerVisitMaxToAllServices = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const perVisitMaxServicesOptions = {
    Yes: [{ value: 'N/A', label: 'N/A' }],
    No: [
      { value: 'Acupuncturist', label: 'Acupuncturist' },
      { value: 'Audiologist', label: 'Audiologist' },
      { value: 'Chiropractor', label: 'Chiropractor' },
      { value: 'Dietician', label: 'Dietician' },
      { value: 'Massage Therapist', label: 'Massage Therapist' },
      { value: 'Osteopath', label: 'Osteopath' },
      { value: 'Physiotherapist', label: 'Physiotherapist' },
      { value: 'Psychologist', label: 'Psychologist' }
    ]
  };
  //Do paramedical benefits extend to all dependents?
  const paramedicalDependents = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const familyOrEmployeeMax = {
    No: [
      { value: 'Family maximum', label: 'Family maximum' },
      { value: 'Employee only maximum', label: 'Employee only maximum' }
    ],
    Yes: [{ value: 'N/A', label: 'N/A' }]
  };
  //Paramedical set of practitioners by insurance company
  const insuranceCompanies = [
    { value: 'Alberta Blue Cross', label: 'Alberta Blue Cross' },
    { value: 'Canada Life', label: 'Canada Life' },
    {
      value: [
        'Acupuncture',
        'Chiropractor',
        'Physiotherapy',
        'Massage Therapy',
        'Naturopath',
        'Osteopath',
        'Podiatrist',
        'Psychologist',
        'Speech Therapist'
      ],
      label: 'Equitable Life'
    },
    { value: 'Manulife', label: 'Manulife' },
    { value: 'RBC', label: 'RBC' },
    { value: 'Sunlife', label: 'Sunlife' }
  ];
  //Does the Company have a Health Spending Account, wellness spending account or flex account, or none of the above?
  const spendingAccounts = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const spendingAccountKinds = {
    Yes: [
      { value: 'Health Spending Account', label: 'Health Spending Account' },
      {
        value: 'Wellness Spending Account',
        label: 'Wellness Spending Account'
      },
      {
        value: 'Health & Wellness Spending Account',
        label: 'Health & Wellness Spending Account'
      },
      { value: 'Flex Account', label: 'Flex Account' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };
  const spendingAccountsAnnualAmounts = {
    'Health Spending Account': [
      { value: '300', label: '$300' },
      { value: '500', label: '$500' },
      { value: '1000', label: '$1,000' },
      { value: '1500', label: '$1,500' },
      { value: '2000', label: '$2,000' },
      { value: '5000', label: '$5,000' },
      { value: '10000', label: '$10,000' }
    ],
    'Wellness Spending Account': [
      { value: '300', label: '$300' },
      { value: '500', label: '$500' },
      { value: '1000', label: '$1,000' },
      { value: '1500', label: '$1,500' },
      { value: '2000', label: '$2,000' },
      { value: '5000', label: '$5,000' },
      { value: '10000', label: '$10,000' }
    ],
    'Flex Account': [
      { value: '300', label: '$300' },
      { value: '500', label: '$500' },
      { value: '1000', label: '$1,000' },
      { value: '1500', label: '$1,500' },
      { value: '2000', label: '$2,000' },
      { value: '5000', label: '$5,000' },
      { value: '10000', label: '$10,000' }
    ],
    'Health & Wellness Spending Account': [
      { value: '600', label: '$600' },
      { value: '1000', label: '$1,000' },
      { value: '2000', label: '$2,000' },
      { value: '3000', label: '$3,000' },
      { value: '4000', label: '$4,000' },
      { value: '10000', label: '$10,000' },
      { value: '20000', label: '$20,000' }
    ],
    'N/A': [{ value: 'N/A', label: 'N/A' }]
  };

  //Does the company have prescription drug coverage?
  const drugsCoverageOption = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const drugsCoinsuranceLevel = {
    Yes: [
      { value: '100', label: '100%' },
      { value: '90', label: '90%' },
      { value: '80', label: '80%' },
      { value: '70', label: '70%' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };
  const drugsAnnualMaximumOptions = {
    Yes: [
      { value: '1,000', label: '$1,000' },
      { value: '1,500', label: '$1,500' },
      { value: '2,000', label: '$2,000' },
      { value: '2,500', label: '$2,500' },
      { value: '3,000', label: '$3,000' },
      { value: '3,500', label: '$3,500' },
      { value: '5,000', label: '$5,000' },
      { value: '10,000', label: '$10,000' },
      { value: 'unlimited', label: '$unlimited' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };
  //Is fertility coverage available?

  const fertilityOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];
  const fertilityAnnualMaximums = {
    Yes: [
      { value: '2,500', label: '$2,500' },
      { value: '3,000', label: '$3,000' },
      { value: '10,000', label: '$10,000' },
      { value: '15,000', label: '$15,000' }
    ],
    No: [{ value: 'N/A', label: 'N/A' }]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const benefits = {
      companyName,
      paramedical,
      coinsuranceParamedical,
      practitionerAnnualMax,
      practitionerAnnualMaxAmount,
      perVisitMax,
      perVisitMaxAmount,
      staggered,
      staggeredServices,
      perVisitMaxToAllServices,
      perVisitMaxServices,
      paramedDependent,
      familyOrEmployeeOnly,
      insuranceCompany,
      spendingAccount,
      spendingAccountKind,
      spendingAccountsAnnualAmount,
      drugsAnnualMax,
      coinsuranceDrugs,
      drugsAnnualMaxAmount,
      fertility
    };

    try {
      const response = await fetch('/api/benefits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(benefits)
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const newBenefits = await response.json();
      console.log(newBenefits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleParamedicalChange = (selectedParamedicalOption) => {
    setParamedical(selectedParamedicalOption);
    console.log(selectedParamedicalOption);
  };

  const handleCoinsuranceParamedicalChange = (
    selectedCoinsuranceParamedicalOptions
  ) => {
    setCoinsuranceParamedical(selectedCoinsuranceParamedicalOptions);
    console.log(selectedCoinsuranceParamedicalOptions);
  };
  const handlePractAnnualMaxChange = (selectedPractAnnualMaxOption) => {
    setPractitionerAnnualMax(selectedPractAnnualMaxOption);
  };
  const handlePractAnnMaxAmountChange = (selectedPractAnnMaxAmountOption) => {
    setPractitionerAnnualMaxAmount(selectedPractAnnMaxAmountOption);
  };
  const handleStaggeredChange = (selectedStaggeredOption) => {
    setStaggered(selectedStaggeredOption);
  };
  const handleStaggeredServicesChange = (selectedStaggeredServicesOptions) => {
    setStaggeredServices(selectedStaggeredServicesOptions);
  };

  const handleMaxPerVisitChange = (selectedMaxPerVisitOption) => {
    setPerVisitMax(selectedMaxPerVisitOption);
  };
  const handlePerVisitMaxAmountChange = (selectedPerVisitMaxAmountOption) => {
    setPerVisitMaxAmount(selectedPerVisitMaxAmountOption);
  };
  const handlePerVisitMaxToAllChange = (selectedPerVisitMaxToAllOption) => {
    setPerVisitMaxToAllServices(selectedPerVisitMaxToAllOption);
  };
  const handlePerVisitMaxServicesChoices = (selectedPerVisitMaxServices) => {
    if (selectedPerVisitMaxServices.length <= 3) {
      setPerVisitMaxServices(selectedPerVisitMaxServices);
    }
  };
  const handleParamedDependentsChange = (selectedParamedDependentsOption) => {
    setParamedDependent(selectedParamedDependentsOption);
  };
  const handleFamilyOrEmployeeChange = (selectedFamilyOrEmployeeOnly) => {
    setFamilyOrEmployeeOnly(selectedFamilyOrEmployeeOnly);
  };
  const handleInsuranceCompanyChange = (selectedInsuranceCompanyOption) => {
    setInsuranceCompany(selectedInsuranceCompanyOption);
  };
  const handleSpendingAccountsChange = (selectedSpendingAccount) => {
    setSpendingAccount(selectedSpendingAccount);
  };
  const handleSpendingAccountKindsChange = (selectedSpendingAccountKind) => {
    setSpendingAccountKind(selectedSpendingAccountKind);
  };
  const handleSpendingAccountsAnnualAmountsChange = (
    selectedSpendingAnnualAmount
  ) => {
    setSpendingAccountsAnnualAmount(selectedSpendingAnnualAmount);
  };
  const handleDrugsCoverageChange = (selectedDrugsCoverageOption) => {
    setDrugsAnnualMax(selectedDrugsCoverageOption);
  };
  const handleCoinsuranceDrugsChange = (selectedCoinsuranceDrugsOptions) => {
    setCoinsuranceDrugs(selectedCoinsuranceDrugsOptions);
  };
  const handleDrugsMaxAmountChange = (selectedDrugsMaxAmountOption) => {
    setDrugsAnnualMaxAmount(selectedDrugsMaxAmountOption);
  };
  const handleFertilityChange = (selectedFertilityOption) => {
    setFertility(selectedFertilityOption);
  };
  const handleFertilityAmountChange = (selectedFertilityAmountOption) => {
    setFertilityAmount(selectedFertilityAmountOption);
  };

  return (
    <LayoutCompanyNavBar>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'flex', margin: 20, justifyContent: 'center' }}>
        <h2>Benefit Booklet Form for Companies/Employees</h2>
      </label>
      <div>
        <label>
          <b>Add Company Name:</b>
          <input
            style={{ width: 700, height: 40, display: 'flex' }}
            onChange={(event) => setCompanyName(event.target.value)}
            value={companyName}
          />
        </label>
      </div>
      {/* Does the client have paramedical benefits available? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Does the client have paramedical benefits available?</b>
          <Select
            options={paramedicalOptions}
            onChange={handleParamedicalChange}
            value={paramedical}
          />
        </div>
        {paramedical && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What is the coinsurance level (%)?</b>
            <Select
              options={coinsuranceParamedicalOptions[paramedical.value]}
              onChange={handleCoinsuranceParamedicalChange}
              value={coinsuranceParamedical}
            />
          </div>
        )}
        {/* How are the Annual Maximums Structured? */}
        <div>
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>Annual maximums Per Practitioner or Combined?</b>
            <Select
              options={practitionersAnnualMaximums}
              onChange={handlePractAnnualMaxChange}
              value={practitionerAnnualMax}
            />
          </div>
          {practitionerAnnualMax && (
            <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
              <b>Practitioner's annual maximums ($)?</b>
              <Select
                options={
                  practitionersAnnualMaxAmounts[practitionerAnnualMax.value]
                }
                onChange={handlePractAnnMaxAmountChange}
                value={practitionerAnnualMaxAmount}
              />
            </div>
          )}
        </div>
      </div>
      {/* Are there staggered maximums for any particular service? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Are there any staggered maximums for any particular service?</b>
          <Select
            options={staggeredMaximums}
            onChange={handleStaggeredChange}
            value={staggered}
          />
        </div>
        {staggered && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>Staggered Maximums for what services?</b>
            <Select
              options={staggeredMaxServices[staggered.value]}
              onChange={handleStaggeredServicesChange}
              value={staggeredServices}
              isMulti
            />
          </div>
        )}
      </div>
      {/* Maximums per Visit */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Are there any maximums per visit?</b>
          <Select
            options={areMaxPerVisit}
            onChange={handleMaxPerVisitChange}
            value={perVisitMax}
          />
        </div>
        {perVisitMax && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What is the per visit maximum ($)?</b>
            <Select
              options={maxAmountPerVisit[perVisitMax.value]}
              onChange={handlePerVisitMaxAmountChange}
              value={perVisitMaxAmount}
            />
          </div>
        )}
      </div>
      {/* Does the per visit maximum apply to all services? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Does the per visit maximum apply to all services?</b>
          <Select
            options={doesPerVisitMaxToAllServices}
            onChange={handlePerVisitMaxToAllChange}
            value={perVisitMaxToAllServices}
          />
        </div>
        {/* {perVisitMaxToAllServices && (
          <div style={{ width: 600, marginBottom: 20, margin: 20 }}>
            <b>
              What paramedical services does the per visit maximum apply to? (up
              to 3)
            </b>
            <Select
              options={
                perVisitMaxServicesOptions[perVisitMaxToAllServices.value]
              }
              onChange={handlePerVisitMaxServicesChoices}
              value={perVisitMaxServices}
              isMulti
            />
          </div>
        )} */}
      </div>
      {/* Do paramedical benefits extend to all dependents? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Do paramedical benefits extend to all dependents?</b>
          <Select
            options={paramedicalDependents}
            onChange={handleParamedDependentsChange}
            value={paramedDependent}
          />
        </div>
        {paramedDependent && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>Family maximum vs Employee only maximum?</b>
            <Select
              options={familyOrEmployeeMax[paramedDependent.value]}
              onChange={handleFamilyOrEmployeeChange}
              value={familyOrEmployeeOnly}
            />
          </div>
        )}
      </div>
      {/*Paramedical set of practitioners by insurance carrier*/}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Paramedical set of practitioners by insurance carrier</b>
          <Select
            options={insuranceCompanies}
            onChange={handleInsuranceCompanyChange}
            value={insuranceCompany}
          />
        </div>
      </div>
      {/*Does the Company have a Health Spending Account, wellness spending account or flex account, or none of the above? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>
            Does the Company have a Health Spending Account, wellness spending
            account or flex account, or none of the above?
          </b>
          <Select
            options={spendingAccounts}
            onChange={handleSpendingAccountsChange}
            value={spendingAccount}
          />
        </div>
        {spendingAccount && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What account does the Company have?</b>
            <Select
              options={spendingAccountKinds[spendingAccount.value]}
              onChange={handleSpendingAccountKindsChange}
              value={spendingAccountKind}
            />
          </div>
        )}
        {spendingAccountKind && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>Spending account annual amount available?</b>
            <Select
              options={spendingAccountsAnnualAmounts[spendingAccountKind.value]}
              onChange={handleSpendingAccountsAnnualAmountsChange}
              value={spendingAccountsAnnualAmount}
            />
          </div>
        )}
      </div>

      {/* Does the company have prescription drug coverage? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Does the company have prescription drug coverage?</b>
          <Select
            options={drugsCoverageOption}
            onChange={handleDrugsCoverageChange}
            value={drugsAnnualMax}
          />
        </div>
        {drugsAnnualMax && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What is the prescription drugs coinsurance level (%)?</b>
            <Select
              options={drugsCoinsuranceLevel[drugsAnnualMax.value]}
              onChange={handleCoinsuranceDrugsChange}
              value={coinsuranceDrugs}
            />
          </div>
        )}
        {drugsAnnualMax && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What is the prescription drugs annual maximum ($)?</b>
            <Select
              options={drugsAnnualMaximumOptions[drugsAnnualMax.value]}
              onChange={handleDrugsMaxAmountChange}
              value={drugsAnnualMaxAmount}
            />
          </div>
        )}
      </div>
      {/* Is fertility coverage available? */}
      <div>
        <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
          <b>Is fertility coverage available?</b>
          <Select
            options={fertilityOptions}
            onChange={handleFertilityChange}
            value={fertility}
          />
        </div>
        {fertility && (
          <div style={{ width: 700, marginBottom: 20, margin: 20 }}>
            <b>What is the annual maximum for fertility ($)?</b>
            <Select
              options={fertilityAnnualMaximums[fertility.value]}
              onChange={handleFertilityAmountChange}
              value={fertilityAmount}
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        variant="contained"
        style={{ display: 'flex', margin: 20, width: 200, backgroundColor: '#0F1A4D', textEmphasisColor: '#FAF5F3'  }}
      >
        SUBMIT
      </Button>
    </form>
    </div>
    </LayoutCompanyNavBar>
  );
}
