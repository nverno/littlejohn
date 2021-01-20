import React from 'react';
import { GiCancel } from 'react-icons/gi';

import listStyles from '../lists.module.scss';
import styles from './edit-list.module.scss';

const ListCell = ({ asset, handle }) => {
  return (
    <div
      className={listStyles.container}
      /* onClick={(e) => { */
      /*   e.preventDefault(); */
      /*   console.log('TODO: Clicked on ', asset, '!'); */
      /* }} */
    >
      <div className={listStyles.outer}>
        <div className={styles.inner}>
          {handle}
          <span>{asset}</span>
          <div>
            <GiCancel size={24} className={styles.removeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCell;
