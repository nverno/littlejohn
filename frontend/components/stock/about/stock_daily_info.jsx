import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import StockDailyInfoCell from './stock_daily_info_cell';
import { companyOverviewExtra } from '../../../selectors/companies';

const StockDailyInfo = ({ company, quote }) => {
  // console.log('Extra: ', props);
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
// const mapStateToProps = (state, ownProps) => {
//   const { company, quote } = ownProps;
//   const { symbol } = ownProps.match.params;

//   return {
//     symbol,
//     overviewExtra: companyOverviewExtra(company, quote),
//   };
// };

// const mapDispatchToProps = (dispatch, { match }) => ({
//   // fetchPriceRecords: () => dispatch(fetchPriceRecords(match.params.symbol)),
// });

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(StockDailyInfo)
// );
