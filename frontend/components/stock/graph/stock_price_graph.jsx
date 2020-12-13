import React, { Component } from 'react';

export default class StockPriceGraph extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchStockPrices('daily');
  }

  render() {
    // XXX: use react spinner while waiting for data
    if (!this.props.prices) {
      return <h1>Loading...</h1>;
    }
    
    return (
      <p>Retrieved {this.props.symbol} data</p>
    );
  }
}
