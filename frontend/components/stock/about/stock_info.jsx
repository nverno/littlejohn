import React from 'react';

import StockDailyInfo from './stock_daily_info';
import StockDailyInfoCell from './stock_daily_info_cell';

const gridColumns = [
  'CEO', 'Employees', 'Headquarters', 'Founded',
  'Market Cap', 'Price-Earnings Ratio', 'Dividend Yield', 'Average Volume',
];

const StockInfoGrid = ({ showMore }) => {

  return (
    <div className="grid-4 lj-stock-info-grid">
      {gridColumns.map((column, idx) =>
        <StockDailyInfoCell title={column} key={idx} />)}
      {showMore && <StockDailyInfo />}
    </div>
  );
};

const StockInfo = props => {
  const [readMore, setReadMore] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  
  return (
    <section className="lj-stock-info-section">
      <header>
        <div className="lj-stock-info-header-container">
          <div className="lj-stock-info-header-outer">
            <h2>About</h2>
          </div>

          <button type="button" className="lj-btn-primary">
            <span className="lj-type4 lj-primary"
                  onClick={() => setShowMore(showMore => !showMore)} >
              {showMore ? 'Show Less' : 'Show More'}
            </span>
          </button>
        </div>
      </header>

      <div className="lj-stock-info-about-container">
        <h3 className="lj-stock-info-about">
          <span className="lj-type7 lj-primary">
            American Airlines Group Inc. Common Stock, also called American
            Airlines, is a holding company, which engages in the operation of
            a network carrier through its principal wholly-owned mainline
            operating subsidiary, American.
          </span>

          <button type="button" className="lj-btn-primary">
            <span className="lj-type4 lj-primary"
                  onClick={() => setReadMore(readMore => !readMore)} >
              {readMore ? 'Read Less' : 'Read More'}
            </span>
          </button>
        </h3>

        <StockInfoGrid showMore={showMore} />
      </div>

    </section>
  );
};

export default StockInfo;
