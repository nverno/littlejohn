import React from 'react';
import StockDailyInfoCell from './stock_daily_info_cell';
import { companyOverviewExtra } from '../../../selectors/companies';

const StockDailyInfo = ({ company, quote }) => {
  if (!company || !quote) return null;
  const extra = companyOverviewExtra(company, quote);
  return (
    <>
      {extra &&
        extra.map((item, idx) => <StockDailyInfoCell key={idx} {...item} />)}
    </>
  );
};
export default StockDailyInfo;
