import React from 'react';

import NavbarContainer from './navbar_container';

const NavbarPage = props => {

  return (
    <>
      <div className="lj-navbar-page-container">
        <div className="lj-navbar-page-outer">
          <div className="lj-navbar-page-body">
            
            {props.children}
            
          </div>
        </div>
      </div>        
      <NavbarContainer />
    </>
  );
};

export default NavbarPage;
