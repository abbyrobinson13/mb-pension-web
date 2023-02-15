import React from 'react';
import styled from 'styled-components';
import { LayoutCompanyNavBar } from './CompanyNavBar';
import DisplayProfileInformation from './DisplayProfileInformation';
import Leftside from './LeftsideProfile.jsx';


function Profile() {
  return (
    <LayoutCompanyNavBar>
    <Container>
      <Section>
        <h1>Profile:</h1>
      </Section>
      <Layout>
        <Leftside />
        <DisplayProfileInformation />
      </Layout>
    </Container>
    </LayoutCompanyNavBar>
  );
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: left;
  text-decoration: none;
  display: flex;
  justify-content: left;
  padding-left: 60px;
`;
const Layout = styled.div`
display: grid;
  grid-template-areas: "leftside rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr);
  column-gap: 25px;
  row-gap: 25px;
  ${'' /* grid-template-row: auto; */}
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;`;

export default Profile;
