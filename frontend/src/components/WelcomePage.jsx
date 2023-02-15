import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function WelcomePage(props) {
  return (
    <Container>
      <Paper>
        <img src="/images/mb-logo-resized.png" />
        <Box p={2}>
          <div className="dropdown">
            <NavLink to="/adminhome">
              <CompanyLogin>Admin Log In</CompanyLogin>
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink to="/login">
              <CompanyLogin>Company/Broker Log In</CompanyLogin>
            </NavLink>
          </div>
        </Box>
      </Paper>
      <Hero style={{ flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src="/images/brain.png" alt="brain image" />
        </div>
      </Hero>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

// const AdminLogin = styled.a`
//   font-size: 16px;
//   padding: 10px 12px;
//   text-decoration: none;
//   border-radius: 4px;
//   color: rgba(0, 0, 0, 0.6);
//   margin-right: 12px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//     color: rgba(0, 0, 0, 0.9);
//     text-decoration: none;
//   }
// `;

const CompanyLogin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #455a64;
  border-radius: 2px;
  transition-duration: 167ms;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
// const StyledPaper = styled(Paper)`
//   max-width: 1128px;
//   margin: auto;
//   margin-top: -120px;
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  height: 600px;
  background-color: #9ac6df;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 400px;
    height: 370px;
    border-radius: 50%;
    margin-top: 50px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default WelcomePage;
