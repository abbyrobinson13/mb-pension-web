import React, { useState } from 'react';
import { signUp, db, signUpBroker } from '../firebase-config.js';
import { collection } from 'firebase/firestore';
import { LayoutAdminNavBar } from './AdminNavBar.jsx';

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
          <img src="path/to/image" alt="Registration" />
        </div>
        <div className="form-container">
          <form>
            <h2>Register</h2>
            <input
              placeholder="Company Name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Company Email"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Company Password"
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />
            </div>
            <input
              placeholder="Insurance Broker Name"
              onChange={(event) => {
                setNewBroker(event.target.value);
              }}
            />
            <input
              placeholder="Insurance Broker Email"
              onChange={(event) => {
                setBrokerEmail(event.target.value);
              }}
            />
            <input
              placeholder="Insurance Broker Password"
              onChange={(event) => {
                setBrokerPassword(event.target.value);
              }}
            />
            <div className="form-group">
              <button onClick={createUser}> Add New Company </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCompany;
