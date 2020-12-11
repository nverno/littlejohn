import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Navbar from './navbar';
import {
  demoLogin,
  logout,
} from '../../actions/session_actions';

const mapStateToProps = (state, _ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(demoLogin()),
  logout: () => {
    dispatch(logout());
    return <Redirect to="/" />;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
