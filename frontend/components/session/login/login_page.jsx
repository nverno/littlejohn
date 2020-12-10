import React from 'react';

import LoginFormContainer from './login_form_container';
import loginImage from './login.jpg';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-body">
        <img src={loginImage} alt="Welcome" className="login-image" />
        <div className="login-content">
          <LoginFormContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
