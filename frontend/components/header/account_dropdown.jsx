import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';

import HeaderDropdown from './header_dropdown';
import AccountDropdownHeader from './account_dropdown_header';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
});

const AccountDropdown = ({ logout, ...props }) => {
  return (
    <HeaderDropdown {...props}>
      <>
        <div className="lj-acct-drop-container lj-theme-overlay">
          <div className="lj-acct-drop-outer">
            <AccountDropdownHeader />
            <a className="lj-acct-logout" onClick={logout}>
              <span className="lj-acct-logout-icon">
                <h3>
                  <FiLogOut size={24} />
                </h3>
              </span>
              <span type="lj-11">Log Out</span>
            </a>
          </div>
        </div>
      </>
    </HeaderDropdown>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(AccountDropdown));
