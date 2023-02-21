import React, { useState } from 'react';
import { signUp, db, signUpBroker } from '../firebase-config.js';
import { collection } from 'firebase/firestore';
import { LayoutAdminNavBar } from './AdminNavBar.jsx';
import Button from '@mui/material/Button';

function CreateCompany() {
  const [newName, setNewName] = useState('');
  const [password, setNewPassword] = useState('');
  const [error, seterror] = useState('');
  const [brokerError, setBrokerError] = useState('');
  const [email, setNewEmail] = useState('');
  const [brokerEmail, setBrokerEmail] = useState('');
  const [brokerPassword, setBrokerPassword] = useState('');
  const [newBroker, setNewBroker] = useState('');
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, 'companies');

  const createUser = async (e) => {
    e.preventDefault();
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setNewEmail('');
      setNewPassword('');
      const res = await signUp(
        email,
        password,
        newName,
        newBroker,
        brokerEmail,
        brokerPassword
      );
      if (res.error) seterror(res.error);
    }
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setBrokerEmail('');
      setBrokerPassword('');
      const res = await signUpBroker(brokerEmail, brokerPassword);
      if (res.brokerError) setBrokerError(res.error);
    }
  };

  return (
    <>
      <LayoutAdminNavBar />
      <div className="registration-page">
        <div className="image-container">
          <img src="/images/company.jpeg" alt="Registration" />
        </div>
        <div className="form-container">
          <h2>Register New Company</h2>
          <div className="form-group">
            <label htmlFor="name">Company Name: </label>
            <input
              placeholder="Company Name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Company Email: </label>
            <input
              placeholder="Company Email"
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Company Password: </label>
            <input
              placeholder="Company Password"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Broker Name: </label>
            <input
              placeholder="Insurance Broker Name"
              onChange={(event) => {
                setNewBroker(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Broker Email: </label>
            <input
              placeholder="Insurance Broker Email"
              onChange={(event) => {
                setBrokerEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Broker Password: </label>
            <input
              placeholder="Insurance Broker Password"
              onChange={(event) => {
                setBrokerPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <Button
              onClick={createUser}
              type="submit"
              variant="contained"
              style={{
                display: 'flex',
                margin: 20,
                width: 350,
                backgroundColor: '#0F1A4D',
                textEmphasisColor: '#FAF5F3'
              }}
            >
              {' '}
              Add Company{' '}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCompany;
