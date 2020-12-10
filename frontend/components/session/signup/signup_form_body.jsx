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
    <h3 className="signup-message">Welcome to LittleJohn</h3>
    <div className="signup-form">
      <label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={handleChange('first_name')}
          className="signup-input"
          required
        />
      </label>{' '}
      <label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={handleChange('last_name')}
          className="signup-input"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange('email')}
          className="signup-input"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={password}
          placeholder="Password (min. 6 characters)"
          onChange={handleChange('password')}
          className="signup-input"
          required
        />
      </label>
      <br />
      <div className="signup-form-footer">
        <input className="signup-submit" type="submit" value="Continue" />

        <p>Already started?</p>
        <Link to="/login">Log in to complete your application</Link>
      </div>
    </div>
  </>
);

export default SignupFormBody;
