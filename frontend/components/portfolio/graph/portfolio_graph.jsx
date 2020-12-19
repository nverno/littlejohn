import React, { Component } from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';
import PropagateLoader from 'react-spinners/PropagateLoader';

import GraphNav from '../../graph/graph_nav';
import PriceGraphHeader from '../../graph/price_graph_header';
import PriceGraph from '../../graph/price_graph';
import { computePortfolioValue } from '../../../selectors/user';

const navIntervals = ['1d', '5d', '1m', '3m', '1y'];

export default class PortfolioGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: '1d',
    };
    this.updateInterval = this.updateInterval.bind(this);
  }

  componentDidMount() {
    const { interval } = this.state;
    // this.props.fetchStockPrices({
    //   interval,
    //   prices: this.props.allPrices,
    // });
  }

  updateInterval(interval) {
    this.setState({ interval });
    // this.props.fetchStockPrices({ interval, prices: this.props.allPrices });
  }

  render() {
    const { prices, holdings } = this.props;
    if (!prices || prices.length === 0) {
      console.log('no prices here');
      return null; //<PropagateLoader />;
    }
    const { interval } = this.state;
    // FIXME: other intervals not done
    const data = computePortfolioValue('1d', holdings, prices);
    if (!data) {
      console.log('Error computing portfolio data');
      return null;
    }

    return (
      <>
        <div>
          {data && <PriceGraph data={data} xkey="label" ykey="value" />}
        </div>

        <GraphNav
          intervals={navIntervals}
          updateInterval={this.updateInterval}
        />
      </>
    );
  }
}
