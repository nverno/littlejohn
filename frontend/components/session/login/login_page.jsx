import React from 'react';

import NavbarPage from '../../navbar/navbar_page';
import LoginFormContainer from './login_form_container';

const LoginPage = () => {
  return (
    <NavbarPage >
      <div className="login-container">
        <div className="login-body">
          <img src={window.loginURL} alt="Welcome" className="login-image" />
          <div className="login-content">
            <LoginFormContainer />
          </div>
        </div>
      </div>
    </NavbarPage>
  );
};

export default LoginPage;
