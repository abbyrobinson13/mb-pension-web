import React, { useState } from 'react';
import { useRef } from 'react';
import { signUp } from '../firebase-config.js';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <>
      <h2>Company Sign Up</h2>
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
        <p>
          already registered? <Link to="/login">Log in</Link>
        </p>
      </div>

      <h2>Broker Sign Up</h2>
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
        <p>
          already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
