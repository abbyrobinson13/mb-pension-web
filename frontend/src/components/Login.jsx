import React, { useState } from 'react';
import { signIn } from '../firebase-config.js';
import { useNavigate } from 'react-router-dom';
import {Avatar} from '@mui/material';
import { Button } from '@mui/material';
import {TextField} from '@mui/material';
import FormControlLabel from '@mui/material';
import Typography from '@mui/material';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import {Grid} from '@mui/material';
import {Paper} from '@mui/material';
import '../App.css';


export default function Login() {
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
    <Grid container component="main" className= "root-login">
       <Grid
        className= "size-grid-logins"
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
      >
        <div className= "paper-logins">
          <Avatar className= "avatar-logins">
            <LockIcon />
          </Avatar>
      <h1>Sign In</h1>
      {error ? <div>{error}</div> : null}
      <form className= "form-logins" noValidate onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="E-mail"
          name="username"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
      </form>
    </div>
      </Grid>
    </Grid>
  );
}


