import React from 'react';
import { fmt } from '../../../selectors/util';
import fonts from '../../../styles/font.module.scss';
import styles from './stock-info.module.scss';

const StockDailyInfoCell = ({ title, value }) => {
  const num = value && parseFloat(value);
  const formatted = num ? fmt(num) : value;

  return (
    <div className={styles.cell}>
      <span className={`${fonts.type4} ${fonts.default}`}>
        <div className={styles.cellContent}>{title}</div>
      </span>
      <div className={styles.cellSpacer} />
      <div className={styles.cellContainer}>
        {formatted || '—'}
      </div>
    </div>
  );
};

export default StockDailyInfoCell;
