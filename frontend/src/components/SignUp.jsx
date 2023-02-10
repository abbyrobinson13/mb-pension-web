import React, { useState } from 'react';
import { useRef } from 'react';
import { signUp, signUpBroker } from '../firebase-config.js';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const [emailBroker, setEmailBroker] = useState('');
  const [passwordBroker, setPasswordBroker] = useState('');
  const [errorBroker, seterrorBroker] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('i am here at company sign up');
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
    console.log('got to handle sumbit broker');
    if (passwordBroker !== passwordBroker) {
      console.log('passwords error');
      seterrorBroker('Passwords do not match');
    } else {
      setEmailBroker('');
      setPasswordBroker('');
      console.log('here i am');
      const res = await signUpBroker(emailBroker, passwordBroker);
      if (res.errorBroker) seterror(res.errorBroker);
    }
  };

  return (
    <>
      <h2>Company Sign Up</h2>
      <div>
        {error ? <div> {error} </div> : null}
        <form id="companyForm" onSubmit={handleSubmit}>
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
        <p>
          already registered? <Link to="/login">Log in</Link>
        </p>
      </div>

      <h2>Broker Sign Up</h2>
      <div>
        {error ? <div> {errorBroker} </div> : null}
        <form id="brokerForm" onSubmit={handleSubmitBroker}>
          <input
            type="email"
            name="emailBroker"
            value={emailBroker}
            placeholder="Your Email"
            required
            onChange={(e) => setEmailBroker(e.target.value)}
          />
          <input
            type="password"
            name="passwordBroker"
            value={passwordBroker}
            placeholder="Your Password"
            required
            onChange={(e) => setPasswordBroker(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
}
export default SignUp;
