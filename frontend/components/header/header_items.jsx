import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({ item, ...props }) => {
  let cname = 'lj-header-link';
  if (item.disabled) cname += ' disabled-link';

  return (
    <div className="lj-header-item-container">
      <Link to={item.to} className={cname}>
        {item.title}
      </Link>
    </div>
  );
};

const HeaderItems = ({ items, ...props }) => {
  return (
    <div className="lj-header-items-container">
      <div className="lj-header-items-outer">
        {items.map((item, idx) => (
          <HeaderItem item={item} key={idx} {...props} />
        ))}
      </div>
    </div>
  );
};

export default HeaderItems;
