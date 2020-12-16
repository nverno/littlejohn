import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../navbar/logo';
import SearchContainer from '../search/search_container';
import HeaderItems from './header_items';
import AccountDropdown from './account_dropdown';

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
    to: '/account',
    component: (item, props) => <AccountDropdown item={item} {...props} />,
  },
];

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="lj-header">
        <div className="lj-header-outer">
          <div className="lj-header-logo-container">
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
