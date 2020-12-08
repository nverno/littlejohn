import React from 'react';
import { Link } from 'react-router-dom';

const LoginFormBody = ({ email, password, handleChange, demoLogin }) => {
  return (
    <>
      <h3 className="login-message">Welcome to LittleJohn</h3>
      <div className="login-form">
        <label>
          Email or username
          <input
            type="text"
            value={email}
            onChange={handleChange('email')}
            className="login-input"
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handleChange('password')}
            className="login-input"
            required
          />
        </label>
        <br />

        {/* FIXME: unhandled */}
        <Link to="/">Forgot your username or password?</Link>

        <br />
        <div className="login-form-footer">
          <input className="login-submit" type="submit" value="Sign In" />
          <input className="login-submit" type="submit" value="Demo Login"
                 onClick={demoLogin} />
        </div>
      </div>
    </>
  );
};
export default LoginFormBody;
