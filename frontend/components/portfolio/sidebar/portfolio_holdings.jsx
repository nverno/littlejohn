import React from 'react';
import { connect } from 'react-redux';

import StockCell from './stock_cell';

const mapStateToProps = (state, ownProps) => ({
  holdings: state.entities.holdings,
  state
});

const PortfolioHoldings = ({ holdings }) => {
  // console.log('Holdings: ', holdings);

  return (
    <>
      {Object.keys(holdings).map((symbol, idx) =>
        <StockCell symbol={symbol} key={idx} />)}
    </>
  );
};

export default connect(mapStateToProps)(PortfolioHoldings);
