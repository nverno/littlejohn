import React, { Component } from 'react';

import HeaderContainer from './header_container';

export default class HeaderPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lj-header-page-container">
        <div className="lj-header-page-outer">
          <div className="lj-header-page-body">
            <div className="main-container">{this.props.children}</div>
          </div>
        </div>
        <HeaderContainer />
      </div>
    );
  }
}
