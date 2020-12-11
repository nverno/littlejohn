import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Navbar from './navbar';
import {
  demoLogin,
  logout,
} from '../../actions/session_actions';
import {
  navbarDropdownClose,
  navbarDropdownOpen,
  navbarCloseAll,
} from '../../actions/navbar_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  isOpen: Boolean(state.ui.navbar.open),
  openId: state.ui.navbar.open,
  welcome: ownProps.welcome,
});

const mapDispatchToProps = (dispatch) => ({
  navbarCloseAll: () => dispatch(navbarCloseAll()),
  navbarDropdownClose: () => dispatch(navbarDropdownClose()),
  navbarDropdownOpen: (itemId) => dispatch(navbarDropdownOpen(itemId)),
  demoLogin: () => dispatch(demoLogin()),
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
