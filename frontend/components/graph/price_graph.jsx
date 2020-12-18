import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ReferenceLine,
} from 'recharts';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { range, isPositive } from '../../selectors/prices';

const PriceGraph = ({ data, xkey, ykey, ...props }) => {
  if (!data || data.length === 0)
    return (
      <div>
        <PropagateLoader />
      </div>
    );
  const yrange = range(data);
  const color = isPositive(data)
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
export default PriceGraph;
