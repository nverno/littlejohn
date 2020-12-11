import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown,  } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

const NestedNavbarItem = ({ item, ...props }) => (
  <li className="lj-nested-navbar-item">
    {item}
  </li>
);

const NestedNavbarItems = ({ items, ...props }) => {
  return (
    <ul className="lj-nested-navbar-items-container">
      {items.map((item, idx) =>
        <NestedNavbarItem key={idx} item={item} {...props} />)}
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
    if (isOpen) {
      navbarDropdownClose();
    } else {
      navbarDropdownOpen(item.title);
    }
  };

  const caret = <span className="lj-navbar-item-caret">
                  {openId === item.title ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                </span>;
  return (
    <li className="lj-navbar-item">
      {item.to
       ? <Link to={item.to} className="lj-navbar-link">{item.title}</Link>
       : <>
           <button
             onClick={handleClick}
             type='button'
             className="lj-navbar-unstyled-button">
             <span>{item.title}</span>
             {caret}
           </button>
           {openId === item.title &&
            <NestedNavbarItems items={item.children} {...props} />}
         </>}
    </li>
  );
};

export default NavbarItem;
