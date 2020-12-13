import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StockDailyInfoCell from './stock_daily_info_cell';
import { companyOverviewExtra } from '../../../selectors/companies';
// import { fetchPriceRecords } from '../../../actions/stock_price_actions';

// These rely on the days data
// const gridExtraColumns = [
//   'High Today', 'Low Today', 'Open Price', 'Volume',
// ];

const StockDailyInfo = (props) => {
  return (
    <>
      {props.overviewExtra.map((item, idx) => (
        <StockDailyInfoCell key={idx} {...item} />
      ))}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { company } = ownProps;
  const { symbol } = ownProps.match.params;
  const prices = state.entities.prices;

  return {
    symbol,
    overviewExtra: companyOverviewExtra(company, prices),
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  // fetchPriceRecords: () => dispatch(fetchPriceRecords(match.params.symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockDailyInfo)
);
