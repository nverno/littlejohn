import React from 'react';
import styles from './list-icons.module.scss';

const ListIcon = ({ icon }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          {icon ||
           <div aria-label="light bulb"
                role="img"
                className="icon-lightbulb">
           </div>}
        </div>
      </div>
    </div>
  );
};

export default ListIcon;
