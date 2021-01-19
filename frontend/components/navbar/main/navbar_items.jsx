import React from 'react';
import NavbarItem from './navbar_item';
import styles from './main-navbar.module.scss';

const NavbarItems = ({ items, ...props }) => {
  return (
    <ul className={styles.items}>
      {items.map((item, idx) =>
        <NavbarItem
          item={item}
          key={idx}
          {...props} />)}
    </ul>
  );
};
export default NavbarItems;
