import React from 'react';

import StockDailyInfo from './stock_daily_info';
import StockDailyInfoCell from './stock_daily_info_cell';
import { SectionHeader, Section } from '../../parts/section';
import { ShowMoreButton, ReadMoreButton } from '../../parts/buttons';

const gridColumns = [
  'CEO',
  'Employees',
  'Headquarters',
  'Founded',
  'Market Cap',
  'Price-Earnings Ratio',
  'Dividend Yield',
  'Average Volume',
];

const StockInfoGrid = ({ showMore }) => {
  return (
    <div className="grid-4 lj-stock-info-grid">
      {gridColumns.map((column, idx) => (
        <StockDailyInfoCell title={column} key={idx} />
      ))}
      {showMore && <StockDailyInfo />}
    </div>
  );
};

const StockInfo = (props) => {
  const [readMore, setReadMore] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  return (
    <Section>
      <SectionHeader title="About">
        <ShowMoreButton toggle={showMore} setToggle={setShowMore} />
      </SectionHeader>

      <div className="lj-stock-info-about-container">
        <h3 className="lj-stock-info-about">
          <span className="lj-type7 lj-primary">
            American Airlines Group Inc. Common Stock, also called American
            Airlines, is a holding company, which engages in the operation of a
            network carrier through its principal wholly-owned mainline
            operating subsidiary, American.
          </span>

          <ReadMoreButton toggle={readMore} setToggle={setReadMore} />
        </h3>

        <StockInfoGrid showMore={showMore} />
      </div>
    </Section>
  );
};

export default StockInfo;
