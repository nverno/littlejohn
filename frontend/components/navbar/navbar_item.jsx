import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown,  } from 'react-icons/im';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

const unstyledButton = name => (
  <button type='button' className="lj-navbar-unstyled-button">
    {name}
  </button>
);

const NavbarItem = ({ item, ...props }) => {
  // const title = ;
  return (
    <li className="lj-navbar-item">
      {item.to
       ? <Link to={item.to} className="lj-navbar-link">{item.title}</Link>
       : unstyledButton(item.title) }
    </li>
  );
};

export default NavbarItem;
