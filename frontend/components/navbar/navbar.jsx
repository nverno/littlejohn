import React from 'react';

import UserNavbar from './user_navbar';
import MainNavbar from './main_navbar';

const Navbar = props => {

  return (
    <div className="navbar-container">
      {props.loggedIn ? <UserNavbar {...props} /> : <MainNavbar {...props} />}
    </div>
  );
};

export default Navbar;
