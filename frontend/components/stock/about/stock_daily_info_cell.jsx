import React from 'react';

const StockDailyInfoCell = ({ title, value }) => (
  <div className="lj-stock-info-cell">
    <span className="lj-type4 lj-primary">
      <div className="lj-stock-info-cell-content">
        {title}
      </div>
    </span>
    <div className="lj-stock-info-cell-spacer"/>
    <div className="lj-stock-info-cell-container">
      {value ? value : '—'}
    </div>
  </div>
);

export default StockDailyInfoCell;
