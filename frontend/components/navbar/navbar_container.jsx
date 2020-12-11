import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

const mapStateToProps = (state, _ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  isOpen: Boolean(state.ui.navbar.open),
  openId: state.ui.navbar.open,
});

const mapDispatchToProps = (dispatch) => ({
  navbarCloseAll: () => dispatch(navbarCloseAll()),
  navbarDropdownClose: () => dispatch(navbarDropdownClose()),
  navbarDropdownOpen: (itemId) => dispatch(navbarDropdownOpen(itemId)),
  demoLogin: () => dispatch(demoLogin()),
  logout: () => {
    dispatch(logout());
    return <Redirect to="/" />;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
