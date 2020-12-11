import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NamedLogo from './named_logo';
import Logo from './logo';

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <nav role='navigation' className="navbar-main">
          <div className="navbar-main-outer">
            <div className="navbar-named-logo-centerer">
              <Link to="/">
                <NamedLogo />
              </Link>
            </div>

            <div className="navbar-main-item-container">
              
            </div>

            <div>
              <Link to='/signup'>
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
