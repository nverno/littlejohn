import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots,
} from 'react-sparklines';

const StockCellGraph = () => {
  return (
    <div className="stock-cell-graph-container">
      <div className="stock-cell-graph-outer">
        <Sparklines data={[5, 10, 5, 20]}>
          <SparklinesLine
            style={{ fill: 'none', strokeWidth: 3, stroke: 'red' }}
          />
          <SparklinesReferenceLine
            type="median"
            style={{
              stroke: 'gainsboro',
              strokeOpacity: 0.75,
              strokeDasharray: '2, 2',
            }}
          />
          {/* <SparklinesSpots /> */}
        </Sparklines>
      </div>
    </div>
  );
};

export default StockCellGraph;
