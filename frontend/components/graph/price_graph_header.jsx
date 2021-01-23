import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { fmtClass, fmtPrice, fmtPercent } from '../../selectors/util';
import styles from './price-graph.module.scss';

const PriceGraphHeader = ({ price, startPrice, finalPrice }) => {
  if (!price) return (
    <div className={styles.header}>
      <PropagateLoader />
    </div>
  );
  const priceChange = finalPrice - startPrice;
  // const price = data[data.length - 1].value;
  const percentChange = priceChange / startPrice;
  const cname = fmtClass(priceChange);
  return (
    <header className={styles.header}>
      <div className={styles.price}>
        <h1 style={{ margin: 0 }}>{fmtPrice(price)}</h1>
      </div>

      <div className={styles.subheader}>
        <span className={styles.percentChange}>
          <span className={cname}>{fmtPrice(priceChange)}</span>
          <span className={cname}> ({fmtPercent(percentChange)})</span>
        </span>
        <span className={styles.changeTime}>Today</span>
      </div>
    </header>
  );
};

export default PriceGraphHeader;
