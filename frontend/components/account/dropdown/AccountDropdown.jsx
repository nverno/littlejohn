import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';
import { ImPower } from '@react-icons/all-files/im/ImPower';
import { GiCash } from 'react-icons/gi';

import HeaderDropdown from '../../header/header_dropdown';
import AccountDropdownHeader from './AccountDropdownHeader';
import { logout } from '../../../actions/session_actions';
import { setTheme } from '../../../actions/settings_actions';
import { setOverlay } from '../../../selectors/themes';
import { openDepositModal } from '../../../actions/user_actions';
import { headerCloseAll } from '../../../actions/header_actions';
import fonts from '../../../styles/font.module.scss';
import styles from './account.module.scss';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
  setTheme: (theme) => dispatch(setTheme(theme)),
  openDepositModal: () => dispatch(openDepositModal()),
  headerCloseAll: () => dispatch(headerCloseAll()),
});

const AccountDropdown = ({ theme, setTheme, logout,
  openDepositModal, headerCloseAll,
  ...props }) => {
  const colorTheme = setOverlay(theme);

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
            <a className={styles.headerItem} onClick={() => {
              headerCloseAll();
              openDepositModal();
            }}>
              <span className={styles.headerIcon}>
                <h3><GiCash size={24} color='var(--rh__semantic-positive-base)' /></h3>
              </span>
              <span className={fonts.type11}>Deposit</span>
            </a>
            <a className={styles.headerItem} onClick={toggleTheme}>
              <span className={styles.headerIcon}>
                <h3>
                  <ImPower
                    size={24}
                    color={theme === 'dark' ? 'yellow' : 'purple'} />
                </h3>
              </span>
              <span className={fonts.type11}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </a>
            <a className={styles.headerItem} onClick={logout}>
              <span className={styles.headerIcon}>
                <h3>
                  <FiLogOut size={24} />
                </h3>
              </span>
              <span className={fonts.type11}>Log Out</span>
            </a>
          </div>
        </div>
      </div>
    </HeaderDropdown>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountDropdown));
