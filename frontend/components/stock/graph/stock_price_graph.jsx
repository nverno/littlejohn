import React, { Component } from 'react';
import Loader from '../../loading/Loader';
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
// too much API usage!
const navDisabled = ['3m', '1y', '5y'];

// Graph header to display overview of data range, eg.
// $122.28
// -$0.83 (-0.67%) Today
// -$0.13 (-0.11%) After Hours

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

    if (!prices) return <Loader />;

    const ykey = interval === '1d' ? 'average' : 'close';

    return (
      <>
        <div>
          <PriceGraph
            data={prices[interval]}
            xkey="label" ykey={ykey}
            interval={interval} />
        </div>

        <GraphNav
          intervals={navIntervals}
          disabled={navDisabled}
          updateInterval={this.updateInterval}
        />
      </>
    );
  }
}
