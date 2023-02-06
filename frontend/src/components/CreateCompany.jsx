import React, { useState } from 'react';
import { useRef } from 'react';
import { signUp } from '../firebase-config.js';
import { signUpBroker } from '../firebase-config.js';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

function CreateCompany() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBroker, setEmailBroker] = useState('');
  const [passwordBroker, setPasswordBroker] = useState('');
  const [error, seterror] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setEmail('');
      setPassword('');
      const res = await signUp(email, password);
      if (res.error) seterror(res.error);
    }
  };

  const handleSubmitBroker = async (e) => {
    e.preventDefault();
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setEmail('');
      setPassword('');
      const res = await signUpBroker(email, password);
      if (res.error) seterror(res.error);
    }
  };

  return (
    <>
      <h2>Sign Up - New Company</h2>
      <div>
        {error ? <div> {error} </div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h2>Sign Up - New Broker</h2>
      <div>
        {error ? <div> {error} </div> : null}
        <form onSubmit={handleSubmitBroker}>
          <input
            type="email"
            name="email"
            value={emailBroker}
            placeholder="Your Email"
            required
            onChange={(e) => setEmailBroker(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={passwordBroker}
            placeholder="Your Password"
            required
            onChange={(e) => setPasswordBroker(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateCompany;
