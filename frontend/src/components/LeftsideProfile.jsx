import React from 'react';
import styled from 'styled-components';

function Leftside() {
  return (
    <Container>
      <ProfileOptions>
        <a>
          <span>
            Profile
            <img src="./images/user-solid.svg" />
          </span>
        </a>
        <a>
          <span>
            Password
            <img src="/images/lock-solid.svg" />
          </span>
        </a>
        <a>
          <span>
            Plan
            <img src="/images/bars-solid.svg" />
          </span>
        </a>
        <a>
          <span>
            Billing
            <img src="/images/money-check-dollar-solid.svg" />
          </span>
        </a>
        <a>
          <span>
            Settings
            <img src="/images/gear-solid.svg" />
          </span>
        </a>
      </ProfileOptions>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;

const ProfileOptions = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 8px 22px 8px 22px;
    font-size: 22px;
    ${'' /* vertical-align: super; */}

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 20px;
        width: 20px;
      }
    }
`;

export default Leftside;
