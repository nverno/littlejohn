import React, { Component } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import GraphNav from '../../graph/graph_nav';

const navIntervals = [ '1D', '1W', '1M', '3M', '1Y', '5Y' ];

// Graph header to display overview of data range, eg.
// $122.28
// -$0.83 (-0.67%) Today
// -$0.13 (-0.11%) After Hours
const StockPriceHeader = props => {

  return (
    <header className="lj-stock-graph-header">
      <div className="lj-stock-graph-price">
        <h1 style={{margin: 0}}>$122.28</h1>
      </div>
      {/* FIXME: separate into component */}
      <div className="lj-stock-graph-subheader">
        <span className="lj-stock-graph-percent-change">
          <span>-$0.83</span>
          <span>(-0.67%)</span>
        </span>
        <span className="lj-stock-graph-percent-change-time">
          Today
        </span>
      </div>
      <div className="lj-stock-graph-subheader">
        <span className="lj-stock-graph-percent-change">
          <span>-$0.13</span>
          <span>(-0.11%)</span>
        </span>
        <span className="lj-stock-graph-percent-change-time">
          Today
        </span>
      </div>
      
    </header>
  );
};

export default class StockPriceGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: '1D',
    };
    this.updateInterval = this.updateInterval.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchStockPrices(this.state.interval);
  }

  updateInterval(interval) {
    this.setState({ interval });
    this.props.fetchStockPrices(interval);
  }

  render() {
    if (!this.props.prices) {
      return (
        <div className="loading"
             style={{
               display: 'flex',
               alignItems: 'center'
             }}>
          <PropagateLoader color="rgb(0,200,5)"/>
        </div>
      );
    }
    
    return (
      <div>
        <StockPriceHeader />
        <p>... Retrieved {this.props.symbol} data</p>

        <div>
          Graph goes here...
        </div>

        <GraphNav
          intervals={navIntervals}
          updateInterval={this.updateInterval}
        />
      </div>
    );
  }
}
