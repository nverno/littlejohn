import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NamedLogo from '../logo/named_logo';
import NavbarItems from './navbar_items';
import styles from './main-navbar.module.scss';

const navbarItems = [
  {
    title: 'Products',
    children: [
      <Link to='/about/our-products'>Stocks & Funds</Link>,
      <Link to='/about/options'>Options</Link>,
      <Link to='/about/gold'>Gold</Link>,
      <Link to='/about/cash-management'>Cash Management</Link>,
    ]
  },
  {
    title: 'Learn',
    children: [
      <Link to='/learn'>Learn</Link>,
      <Link to='/snacks'>Snacks</Link>,
    ]
  },
  {
    title: 'Support',
    to: '/support',
  },
  {
    title: 'Who we are',
    children: [
      <Link to="/aboutus">About us</Link>,
      <Link to="/our-commitments">Our commitments</Link>,
      <Link to="/our-customers">Our customers</Link>,
      <Link to="/blog">Blog</Link>,
    ]
  }
];

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const controls = this.props.loggedIn
          ? (
            <Link to="/portfolio" className="navbar-signup-button">
              My Account
            </Link>
          ) : (
            <>
              <Link to='/login' className="navbar-login-anchor">
                <span className="navbar-login-text">
                  <span>Log In</span>
                </span>
              </Link>
              <div className={styles.buttonSpacer}/>
              <Link to="/signup" className="navbar-signup-button">
                Sign up
              </Link>
            </>
          );

    return (
      <div className={styles.outer}>
        
        <div className={styles.logo}>
          <Link to="/">
            <NamedLogo />
          </Link>
        </div>

        <div className={styles.itemsContainer}>
          <NavbarItems items={navbarItems} {...this.props} />
        </div>

        <div className={styles.spacer} />

        <div className={styles.loginContainer}>
          {controls}
        </div>

      </div>
    );
  }
}
