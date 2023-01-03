import React from 'react';

function WelcomePage() {
  function handleAdministrativeLoginClick() {
    console.log('admin log in clicked');
  }

  function handleCompanyLoginClick() {
    console.log('admin log in clicked');
  }

  return (
    <div>
      <h1>Welcome to our website!</h1>
      <p>Please select one of the following options to log in:</p>
      <button onClick={handleAdministrativeLoginClick}>
        Administrative log in
      </button>
      <button onClick={handleCompanyLoginClick}>Company log in</button>
    </div>
  );
}

export default WelcomePage;
