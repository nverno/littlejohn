import React from 'react';

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import styles from './stock-cell.module.scss';

const StockCellGraph = ({ symbol, data, positive }) => {
  if (!data) return null;
  return (
    <div className={styles.graphContainer}>
      <div className={styles.graphOuter}>
        <Sparklines
          min={Math.min.apply(Math, data)}
          max={Math.max.apply(Math, data)}
          data={data}
        >
          <SparklinesLine
            style={{
              fill: 'none',
              strokeWidth: 4,
              stroke: positive
                ? 'var(--rh__semantic-positive-base)'
                : 'var(--rh__semantic-negative-base)',
            }}
          />
          <SparklinesReferenceLine
            type="median"
            style={{
              stroke: 'var(--rh__neutral-fg2)',
              strokeOpacity: 1,
              strokeWidth: "2",
              strokeDasharray: '2, 2',
            }}
          />
        </Sparklines>
      </div>
    </div>
  );
};

export default StockCellGraph;
