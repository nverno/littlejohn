import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import styles from './main-navbar.module.scss';

const NestedNavbarItem = ({ item, ...props }) => (
  <li className={styles.nestedItem}>
    <span className="type11">{item}</span>
  </li>
);

const NestedNavbarItems = ({ items, isOpen, ...props }) => {
  const cname = isOpen ? styles.itemsExpanded : '';
  return (
    <ul className={cname}>
      {items.map((item, idx) => (
        <NestedNavbarItem key={idx} item={item} {...props} />
      ))}
    </ul>
  );
};

const NavbarItem = ({
  item,
  isOpen,
  openId,
  navbarDropdownOpen,
  navbarDropdownClose,
  ...props
}) => {
  // click handler for the actual nav item: toggles sublist
  const handleClick = (e) => {
    if (isOpen && openId === item.title) {
      navbarDropdownClose();
    } else {
      if (isOpen) navbarDropdownClose();
      navbarDropdownOpen(item.title);
    }
  };

  const caret = (
    <span className={styles.caret}>
      {openId === item.title ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </span>
  );
  return (
    <li className={styles.navbarItem}>
      {item.to ? (
        /* @include unstyled-anchor($color: black, $color-hover: rgba(0, 180, 5, 1)); */
        <Link to={item.to} className={styles.link}> {/* "lj-navbar-link" */}
          {item.title}
        </Link>
      ) : (
        <>
          <button
            onClick={handleClick}
            type="button"
            className={styles.button}  /* "lj-navbar-unstyled-button" */
          >
            <span>{item.title}</span>
            {caret}
          </button>
          {openId === item.title && (
            <NestedNavbarItems
              items={item.children}
              isOpen={isOpen}
              {...props}
            />
          )}
        </>
      )}
    </li>
  );
};

export default NavbarItem;
