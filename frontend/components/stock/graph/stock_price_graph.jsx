import React, { Component } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import PriceGraph from '../../graph/price_graph';
import GraphNav from '../../graph/graph_nav';
import {
  quoteClass,
  prettyQuotePrice,
  quotePercent,
  positiveChange,
  quotePrice,
} from '../../../selectors/quotes';

const navIntervals = ['1d', '5d', '1m', '3m', '1y', '5y'];

// Graph header to display overview of data range, eg.
// $122.28
// -$0.83 (-0.67%) Today
// -$0.13 (-0.11%) After Hours
const StockPriceHeader = ({ quote, symbol }) => {
  if (!quote) return <PropagateLoader />;
  const cname = quoteClass(quote);

  return (
    <header className="lj-stock-graph-header">
      <div className="lj-stock-graph-price">
        <h1 style={{ margin: 0 }}>{quotePrice(quote)}</h1>
      </div>

      <div className="lj-stock-graph-subheader">
        <span className="lj-stock-graph-percent-change">
          <span className={cname}>{prettyQuotePrice(quote, 'change')}</span>
          <span className={cname}> ({quotePercent(quote)})</span>
        </span>
        <span className="lj-stock-graph-percent-change-time">Today</span>
      </div>
      {/* <div className="lj-stock-graph-subheader"> */}
      {/*   <span className="lj-stock-graph-percent-change"> */}
      {/*     <span>-$0.13</span> */}
      {/*     <span>(-0.11%)</span> */}
      {/*   </span> */}
      {/*   <span className="lj-stock-graph-percent-change-time">Today</span> */}
      {/* </div> */}
    </header>
  );
};

export default class StockPriceGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: '1d',
    };
    this.updateInterval = this.updateInterval.bind(this);
  }

  componentDidMount() {
    const { interval } = this.state;
    this.props.fetchStockPrices({
      interval,
      prices: this.props.allPrices,
    });
  }

  componentDidUpdate(prevProps) {
    const { symbol, fetchStockPrices } = this.props;
    const { interval } = this.state;
    if (symbol !== prevProps.symbol)
      fetchStockPrices({ interval, prices: this.props.allPrices });
  }

  updateInterval(interval) {
    this.setState({ interval });
    this.props.fetchStockPrices({ interval, prices: this.props.allPrices });
  }

  render() {
    const { symbol, prices, quote } = this.props;
    const { interval } = this.state;

    if (!prices) {
      return <PropagateLoader />;
    }
    const ykey = interval === '1d' ? 'average' : 'close';

    return (
      <>
        <StockPriceHeader symbol={symbol} quote={quote} />

        <div>
          <PriceGraph data={prices[interval]} xkey="label" ykey={ykey} />
        </div>

        <GraphNav
          intervals={navIntervals}
          updateInterval={this.updateInterval}
        />
      </>
    );
  }
}
