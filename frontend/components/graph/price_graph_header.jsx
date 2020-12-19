import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import {
  fmtClass,
  fmtPrice,
  fmtPercent,
} from '../../selectors/quotes';

const PriceGraphHeader = ({ data }) => {
  if (!data) return <PropagateLoader />;
  const priceChange = data[data.length - 1].value - data[0].value;
  const price = data[data.length - 1].value;
  const percentChange = priceChange / price;
  const cname = fmtClass(priceChange);
  return (
    <header className="lj-stock-graph-header">
      <div className="lj-stock-graph-price">
        <h1 style={{ margin: 0 }}>{fmtPrice(price)}</h1>
      </div>

      <div className="lj-stock-graph-subheader">
        <span className="lj-stock-graph-percent-change">
          <span className={cname}>{fmtPrice(priceChange)}</span>
          <span className={cname}> ({fmtPercent(percentChange)})</span>
        </span>
        <span className="lj-stock-graph-percent-change-time">Today</span>
      </div>
      {/* <div className="lj-stock-graph-subheader"> */}
      {/*   <span className="lj-stock-graph-percent-change"> */}
      {/*     <span>-$0.13</span> */}
      {/*     <span>(-0.11%)</span> */}
      {/*   </span> */}
      {/*   <span className="lj-stock-graph-percent-change-time">Today</span> */}
      {/* </div> */}
    </header>
  );
};

export default PriceGraphHeader;
