import React from 'react';
import { Link } from 'react-router-dom';

/*
  Make Your Money Move
  ...

  [first name    ] [last name    ]
  [email                         ]
  [ Password (min. 10 characters)]

  Continue  |  Log in...
*/
const SignupFormBody = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
}) => (
  <>
    {/* <h3 className="signup-message">Welcome to LittleJohn</h3> */}
    <div className="signup-form">
      <div className="signup-form-row-1">
        <div className="signup-input-firstname">
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First name"
            onChange={handleChange('first_name')}
            className="form-input"
            required
          />
        </div>
        <div className="signup-input-lastname">
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={handleChange('last_name')}
            className="form-input"
            required
          />
        </div>
      </div>
      <div className="signup-input-email">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange('email')}
          className="form-input"
          required
        />
      </div>
      <div className="signup-input-password">
        <input
          type="password"
          value={password}
          placeholder="Password (min. 6 characters)"
          onChange={handleChange('password')}
          className="form-input"
          required
        />
      </div>

      <div className="signup-form-footer">
        <div className="signup-form-button-container">
          <button className="signup-submit login-submit" type="submit">
            Continue
          </button>
        </div>
        <div className="signup-form-login">
          <span>Already started?</span>
          <br />
          <Link to="/login">Log in to complete your application</Link>
        </div>
      </div>
    </div>
  </>
);

export default SignupFormBody;
