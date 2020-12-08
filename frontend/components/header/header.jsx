import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to="/" className="header-link">
          <Logo />
        </Link>
      </header>
    );
  }
}
