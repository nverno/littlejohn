import React from 'react';

import NavbarItem from './navbar_item';

const NavbarItems = ({ items, ...props }) => {
  return (
    <ul className="lj-navbar-items-container">
      {items.map((item, idx) =>
        <NavbarItem item={item} key={idx} {...props} />)}
    </ul>
  );
};

export default NavbarItems;
