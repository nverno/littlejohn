import React from 'react';

import LoginFormContainer from './login_form_container';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-body">
        <img src={window.loginURL} alt="Welcome" className="login-image" />
        <div className="login-content">
          <LoginFormContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
