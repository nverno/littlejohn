import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';
import SearchContainer from '../search/search_container';
import HeaderItems from './header_items';
import AccountDropdown from '../account/dropdown/AccountDropdown';
import styles from './header.module.scss';
import logoStyles from '../logo/logo.module.scss';

const headerItems = [
  {
    title: 'Free Stocks',
    to: '/account/referral',
    disabled: true,
  },
  {
    title: 'Portfolio',
    to: '/',
  },
  {
    title: 'Cash',
    to: '/cash',
    disabled: true,
  },
  {
    title: 'Messages',
    to: '/messages',
    disabled: true,
  },
  {
    title: 'Account',
    to: '#',
    component: (item, props) => <AccountDropdown item={item} {...props} />,
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.outer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <Logo className={logoStyles.logo}/>
          </Link>
        </div>

        <SearchContainer />

        <HeaderItems items={headerItems} />
      </div>
    </header>
  );
};
export default Header;
