import React from 'react';

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const StockCellGraph = ({ symbol, data, positive }) => {
  // console.log('CELL: ', data);
  if (!data) return null;
  return (
    <div className="stock-cell-graph-container">
      <div className="stock-cell-graph-outer">
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
