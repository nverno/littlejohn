import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StockDailyInfoCell from './stock_daily_info_cell';
import { companyOverviewExtra } from '../../../selectors/companies';

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
  const quotes = state.entities.quotes[symbol];

  return {
    symbol,
    overviewExtra: companyOverviewExtra(company, quotes),
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  // fetchPriceRecords: () => dispatch(fetchPriceRecords(match.params.symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockDailyInfo)
);
