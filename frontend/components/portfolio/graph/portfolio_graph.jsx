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
import { range, isPositive } from '../../../selectors/prices';

const navIntervals = ['1d', '5d', '1m', '3m', '1y', '5y', 'All'];

const PriceGraph = ({ data, xkey, ykey, ...props }) => {
  if (!data || data.length === 0)
    return (
      <div>
        <PropagateLoader />
      </div>
    );
  const yrange = range(data);
  const color = isPositive(data, ykey)
    ? 'var(--rh__semantic-positive-base)'
    : 'var(--rh__semantic-negative-base)';

  return (
    <div>
      <div className="lj-stock-graph-container">
        <div className="lj-stock-graph-outer">
          <div className="lj-stock-graph-inner">
            <ResponsiveContainer height="100%" width="100%">
              <LineChart
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <XAxis dataKey={xkey} axisLine={false} tick={false} />
                <YAxis
                  dataKey={ykey}
                  domain={yrange}
                  axisLine={false}
                  tick={false}
                />
                <Line
                  type="monotone"
                  dataKey={ykey}
                  strokeWidth="2"
                  stroke={color}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    if (!prices) {
      return null; //<PropagateLoader />;
    }

    return (
      <>
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
