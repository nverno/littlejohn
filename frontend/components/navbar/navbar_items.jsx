import React, { Component } from 'react';

import NavbarItem from './navbar_item';

const NavbarItems = ({ items, ...props }) => {
  return (
    <ul className="navbar-items-container">
      {items.map((item, idx) => <NavbarItem item={item} key={idx} {...props} />)}
    </ul>
  );
};

export default NavbarItems;
