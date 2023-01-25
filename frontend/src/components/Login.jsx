import { useState } from 'react';
import { signIn } from '../firebase-config.js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    const res = await signIn(email, password);
    if (res.error) seterror(res.error);
    let path = `/companyhome`;
    navigate(path);
  };

  return (
    <>
      <h1>Log in</h1>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default Login;
