import React, { Component } from 'react';

import LoginFormBody from './login_form_body';
import SignupFormBody from './signup_form_body';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // XXX: use camelcase and convert before sending to backend??
      // Something like Jbuilder.key_format, but going the other way?
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // FIXME: better display errors? Check site
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div className={`${formType}-form-container`}>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className={`${formType}-form`}>
          {formType === 'login' ? (
            <LoginFormBody {...this.state} handleChange={this.handleChange} />
          ) : (
            <SignupFormBody {...this.state} handleChange={this.handleChange} />
          )}
        </form>
      </div>
    );
  }
}

export default SessionForm;
