import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PriceGraphHeader from './price_graph_header';

import { range, isPositive } from '../../selectors/prices';

const PriceGraphTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="price-graph-tooltip">
        <p className="price-graph-label">{label}</p>
        {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

const PriceGraph = ({ data, xkey, ykey, ...props }) => {
  if (!data || data.length === 0)
    return (
      <div>
        <PropagateLoader />
      </div>
    );

  const finalPrice = data[data.length - 1][ykey];
  const startPrice = data[0][ykey];
  const [price, setPrice] = React.useState(finalPrice);
  const yrange = range(data);
  const color = isPositive(data, ykey)
    ? 'var(--rh__semantic-positive-base)'
    : 'var(--rh__semantic-negative-base)';

  return (
    <>
      <PriceGraphHeader
        data={data}
        price={price}
        startPrice={startPrice}
        finalPrice={finalPrice}
      />

      <div>
        <div className="lj-stock-graph-container">
          <div className="lj-stock-graph-outer">
            <div className="lj-stock-graph-inner">
              <ResponsiveContainer height="100%" width="100%">
                <LineChart
                  data={data}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  onMouseMove={({ isTooltipActive, activePayload }) => {
                    /* console.log('Payload: ', data); */
                    isTooltipActive && setPrice(activePayload[0].payload[ykey]);
                  }}
                  onMouseLeave={() => setPrice(data[data.length - 1][ykey])}
                >
                  <XAxis
                    dataKey={xkey}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(_tick) => '·'} /* tick={false} */
                  />
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
                    /* connectNulls={true} */
                  />

                  <Tooltip
                    position={{ y: -50 }}
                    cursor={true}
                    content={<PriceGraphTooltip />}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceGraph;
