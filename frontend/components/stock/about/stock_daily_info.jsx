import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StockDailyInfoCell from './stock_daily_info_cell';
import { companyOverviewExtra } from '../../../selectors/companies';

const StockDailyInfo = (props) => {
  // console.log('Extra: ', props);
  return (
    <>
      {props.overviewExtra &&
        props.overviewExtra.map((item, idx) => (
          <StockDailyInfoCell key={idx} {...item} />
        ))}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { company, quote } = ownProps;
  const { symbol } = ownProps.match.params;

  return {
    symbol,
    overviewExtra: companyOverviewExtra(company, quote),
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  // fetchPriceRecords: () => dispatch(fetchPriceRecords(match.params.symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockDailyInfo)
);
