import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NamedLogo from './named_logo';
import NavbarItemsContainer from './items/navbar_items_container';

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
              <div className="navbar-button-spacer"/>
              <Link to="/signup" className="navbar-signup-button">
                Sign up
              </Link>
            </>
          );

    return (
      <div className="navbar-main-outer">
        
        <div className="navbar-named-logo-centerer">
          <Link to="/">
            <NamedLogo />
          </Link>
        </div>

        <div className="navbar-main-item-container">
          <NavbarItemsContainer items={navbarItems} {...this.props} />
        </div>

        <div className="navbar-main-spacer"/>
        {/* <div className="navbar-main-empty-button"> */}
        {/*   <svg fill="rgb(0, 0, 0)" height="30" width="30"> */}
        {/*     <g className="css-13a2iw2-menuBar-DrawerMenuButton"> */}
        {/*       <rect fill="transparent" height="30" width="30" x="0" y="0"></rect> */}
        {/*       <rect height="3" width="30" x="0" y="7"></rect> */}
        {/*     </g> */}
        {/*     <g className="css-13a2iw2-menuBar-DrawerMenuButton"> */}
        {/*       <rect fill="transparent" height="30" width="30" x="0" y="0"></rect> */}
        {/*       <rect height="3" width="30" x="0" y="20"></rect> */}
        {/*     </g> */}
        {/*   </svg> */}
        {/* </div> */}
        
        <div className="navbar-login-container">
          {controls}
        </div>

      </div>
    );
  }
}
