import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditEmployee = () => {
 const [employee, setEmployee] = useState();
  const params = useParams();
  const id = params.id;
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Employee Updated');
    setConfirmSubmit(true);
    navigate('/employeelist');
    const employee = {
      id,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth
    };
    const response = await fetch('/api/employee/{id}', {
      method: 'PUT',
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
      <form className="form" onSubmit={handleSubmit}>
        <nav className="bg-dark navbar-dark navbar">
          <div className="row col-12 d-flex justify-content-center text-white">
            <h2>Employee Edit</h2>
          </div>
        </nav>
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
            <button
              type="submit"
              disabled={
                !firstName || !lastName || !gender || !dateOfBirth || !email
              }
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default EditEmployee;
