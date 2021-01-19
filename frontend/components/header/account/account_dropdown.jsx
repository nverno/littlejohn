import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';
import { ImPower } from '@react-icons/all-files/im/ImPower';

import HeaderDropdown from '../header_dropdown';
import AccountDropdownHeader from './account_dropdown_header';
import { logout } from '../../../actions/session_actions';
import { setTheme } from '../../../actions/settings_actions';
import styles from './account.module.scss';
import themes from '../../../styles/theme.module.scss';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
  setTheme: (theme) => dispatch(setTheme(theme)),
});

const AccountDropdown = ({ theme, setTheme, logout, ...props }) => {
  const colorTheme = theme === 'dark' ? themes.overlayDark : themes.overlay;

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('');
    else setTheme('dark');
  };

  return (
    <HeaderDropdown {...props}>
      <div>
        <div className={`${styles.container} ${colorTheme}`}>
          <div className={styles.outer}>
            <AccountDropdownHeader />
            <a className={styles.headerItem} onClick={toggleTheme}>
              <span className={styles.headerIcon}>
                <h3><ImPower size={24} /></h3>
              </span>
              <span type='type11'>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </a>
            <a className={styles.headerItem} onClick={logout}>
              <span className={styles.headerIcon}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountDropdown));
