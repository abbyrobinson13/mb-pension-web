import React, { useState } from 'react';

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  const options = [
    { label: 'Female', value: 'apple' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Form submitted');
    const employee = {
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth
    };
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
    <>
      <nav className="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h2>Employee Form</h2>
        </div>
      </nav>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="firstName">
            <label className="form_label" for="firstName">
              First Name
            </label>
            <input
              className="form_input"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              placeholder="Enter first name...."
            />
          </div>
          <div className="lastName">
            <label className="form-label" for="firstName">
              Last Name
            </label>
            <input
              className="form_input"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              placeholder="Enter last name...."
            />
          </div>
          <div className="gender">
            <label className="form-label" for="gender">
              Gender
            </label>
            {/* <input
              className="form_input"
              onChange={(event) => setGender(event.target.value)}
              value={gender}
            /> */}
            <select
              onChange={(event) => setGender(event.target.value)}
              value={gender}
              style={{ width: 480, display: 'block' }}
            >
              <option value="" hidden>
                Select....
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="dateOfBirth">
            <label className="form-label" for="dateOfBirth">
              Date Of Birth:
            </label>
            <input
              className="form_input"
              type="date"
              id="dateOfBirth"
              onChange={(event) => setDateOfBirth(event.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className="email">
            <label className="form-label" for="email">
              Email
            </label>
            <input
              className="form_input"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Enter your email...."
            />
          </div>
          <br />
          <div class="submit">
            <button type="submit"> Add New Employee</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default EmployeeForm;
