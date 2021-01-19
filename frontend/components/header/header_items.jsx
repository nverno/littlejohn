import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const HeaderItem = ({ item, ...props }) => {
  const cname = item.disabled ? styles.disabled : styles.link;

  return (
    <div className={styles.itemContainer}>
      {item.component ? (
        item.component(item, props)
      ) : (
        <Link to={item.to} className={cname}>
          {item.title}
        </Link>
      )}
    </div>
  );
};

const HeaderItems = ({ items, ...props }) => {
  return (
    <div className={styles.itemsContainer}>
      <div className={styles.itemsOuter}>
        {items.map((item, idx) => (
          <HeaderItem item={item} key={idx} {...props} />
        ))}
      </div>
    </div>
  );
};

export default HeaderItems;
