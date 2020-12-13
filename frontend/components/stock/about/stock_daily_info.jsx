import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StockDailyInfoCell from './stock_daily_info_cell';
// import { fetchPriceRecords } from '../../../actions/stock_price_actions';

// These rely on the days data
const gridExtraColumns = [
  'High Today', 'Low Today', 'Open Price', 'Volume',
  '52 Week High', '52 Week Low',
];

const StockDailyInfo = props => {
  return (
    <>
      {gridExtraColumns.map((column, idx) =>
        <StockDailyInfoCell title={column} key={idx}/>)}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;
  return ({
    symbol,
    prices: state.entities.prices[symbol],
  });
};

const mapDispatchToProps = (dispatch, { match }) => ({
  // fetchPriceRecords: () => dispatch(fetchPriceRecords(match.params.symbol)),
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(StockDailyInfo));
