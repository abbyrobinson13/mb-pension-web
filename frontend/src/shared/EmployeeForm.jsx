import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const EmployeeForm = (props) => {
  const { employee, buttonText, handleSubmit } = props;
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (employee) {
      setEmployeeNumber(employee.employeeNumber);
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setGender(employee.gender);
      setDateOfBirth(employee.dateOfBirth);
      setEmail(employee.email);
      setPolicyNumber(employee.policyNumber);
    }
  }, [employee]);

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          const employeeValues = {
            employeeNumber,
            firstName,
            lastName,
            gender,
            dateOfBirth,
            email,
            policyNumber
          };
          handleSubmit(employeeValues);
        }}
      >
        <div className="form-content">
          <h3 className="form-title"></h3>
          <div className="form-group mt-3">
            <label>Employee Number</label>
            <input
              type="firstName"
              className="form-control mt-1"
              onChange={(event) => setEmployeeNumber(event.target.value)}
              value={employeeNumber}
              placeholder="Enter employee number...."
            />
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="firstName"
              className="form-control mt-1"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              placeholder="Enter first name...."
            />
          </div>

          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="lastName"
              className="form-control mt-1"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              placeholder="Enter last name...."
            />
          </div>
          <div className="form-group mt-3">
            <label>Gender</label>
            <select
              type="gender"
              className="form-control mt-1"
              onChange={(event) => setGender(event.target.value)}
              value={gender}
              style={{ width: 320, display: 'block' }}
            >
              <option value="" hidden>
                Select....
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Date Of Birth</label>
            <input
              type="date"
              className="form-control mt-1"
              onChange={(event) => setDateOfBirth(event.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="lastName"
              className="form-control mt-1"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Enter email...."
            />
          </div>
          <div className="form-group mt-3">
            <label>Policy Number</label>
            <input
              type="firstName"
              className="form-control mt-1"
              onChange={(event) => setPolicyNumber(event.target.value)}
              value={policyNumber}
              placeholder="Enter policy number...."
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !firstName || !lastName || !gender || !dateOfBirth || !email
              }
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EmployeeForm;
