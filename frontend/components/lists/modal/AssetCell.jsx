import React from 'react';
import { GiCancel } from 'react-icons/gi';

import listStyles from '../lists.module.scss';
import fonts from '../../../styles/font.module.scss';
import styles from './edit-list.module.scss';

const AssetCell = ({ asset, handle, removeAsset }) => {
  return (
    <div className={listStyles.container}>
      <div className={listStyles.outer}>
        <div className={styles.inner}>
          <div>{handle}</div>

          <span className={fonts.type15}>{asset}</span>

          <div>
            <GiCancel
              size={24}
              className={styles.removeIcon}
              onClick={() => removeAsset(asset)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCell;
