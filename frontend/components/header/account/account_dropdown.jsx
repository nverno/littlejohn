import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';

import HeaderDropdown from '../header_dropdown';
import AccountDropdownHeader from './account_dropdown_header';
import { logout } from '../../../actions/session_actions';
import styles from './account.module.scss';

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
});

const AccountDropdown = ({ logout, ...props }) => {
  return (
    <HeaderDropdown {...props}>
      <div>
        <div className={styles.container}>
          <div className={styles.outer}>
            <AccountDropdownHeader />
            <a className={styles.logout} onClick={logout}>
              <span className={styles.logoutIcon}>
                <h3>
                  <FiLogOut size={24} />
                </h3>
              </span>
              <span type="type11">Log Out</span>
            </a>
          </div>
        </div>
      </div>
    </HeaderDropdown>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(AccountDropdown));
