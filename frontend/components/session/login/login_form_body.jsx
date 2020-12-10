import React from 'react';
import { Link } from 'react-router-dom';

const LoginFormBody = ({ email, password, handleChange, demoLogin }) => {
  return (
    <>
      <header className="login-header">
        <span>Welcome to LittleJohn</span>
      </header>
      <div className="login-form-body">
        <label>
          Email or username
          <br />
          <input
            type="text"
            value={email}
            onChange={handleChange('email')}
            className="form-input"
            required
          />
        </label>
        <br />
        <label>
          Password
          <br />
          <input
            type="password"
            value={password}
            onChange={handleChange('password')}
            className="form-input"
            required
          />
        </label>
        <br />
        {/* FIXME: unhandled */}
        <Link to="/signup/reset_password">
          <p>Forgot your username or password?</p>
        </Link>

        <br />
        <footer className="login-form-footer">
          <input className="login-submit" type="submit" value="Sign In" />{' '}
          <input
            className="login-submit"
            type="submit"
            value="Demo Login"
            onClick={demoLogin}
          />
        </footer>
      </div>
    </>
  );
};
export default LoginFormBody;
