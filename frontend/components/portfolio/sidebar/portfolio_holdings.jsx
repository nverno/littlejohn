import React, { Component } from 'react';
import { connect } from 'react-redux';

import StockCell from '../../lists/cell/StockCell';
import { fetchSidebarHoldingsData } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, _ownProps) => ({
  holdings: state.entities.holdings,
  quotes: state.entities.quotes,
  prices: state.entities.prices,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSidebarHoldingsData: (stateData) =>
    dispatch(fetchSidebarHoldingsData(stateData)),
});

class PortfolioHoldings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { quotes, prices } = this.props;
    this.props.fetchSidebarHoldingsData({ quotes, prices });
  }

  render() {
    const { holdings, quotes } = this.props;
    return (
      <>
        {Object.keys(holdings).map((symbol, idx) => (
          <StockCell quote={quotes[symbol]} symbol={symbol} key={idx} />
        ))}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioHoldings);
