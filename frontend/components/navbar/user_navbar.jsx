import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/logo';

export default class UserNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <nav role='navigation' className="navbar-main">
          <div className="navbar-main-outer">
            <div className="lj-logo">
              <Link to="/">
                <Logo className="lj-logo" />
              </Link>
            </div>

            <div className="navbar-main-item-container">
              
            </div>

            <div>
              <button onClick={() => this.props.logout()}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
