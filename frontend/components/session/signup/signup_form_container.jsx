import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  signup,
  clearSessionErrors,
} from '../../../actions/session_actions';
import SessionForm from '../session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  // navLink: <Link to="/login">Log in to complete your application</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
