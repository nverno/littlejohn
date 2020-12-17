import React, { Component } from 'react';
import { connect } from 'react-redux';

import StockCell from './stock_cell';
import { fetchSidebarHoldingsData } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, _ownProps) => ({
  holdings: state.entities.holdings,
  quotes: state.entities.quotes,
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
    console.log('PHoldings: ', this.props.holdings, this.props.quotes);
    const { quotes } = this.props;
    this.props.fetchSidebarHoldingsData({ quotes });
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
