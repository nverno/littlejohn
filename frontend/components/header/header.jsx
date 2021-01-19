import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../navbar/logo/logo';
import SearchContainer from '../search/search_container';
import HeaderItems from './header_items';
import AccountDropdown from './account/account_dropdown';
import styles from './header.module.scss';

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

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.outer}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <Logo className="lj-logo" />
            </Link>
          </div>

          <SearchContainer />

          <HeaderItems items={headerItems} />
        </div>
      </header>
    );
  }
}
