import React from 'react';

import { Section } from '../parts/section';
import { fmt, getMarketValue } from '../../selectors/user';

const StockHoldings = ({ holding, quote }) => {
  return (
    <Section>
      <div className="grid-2">
        <div className="grid-2-cell sh-grid-cell">
          <header>
            <div style={{ marginBottom: '1px' }}>Market Value</div>
            <h2>
              <span className="lj-type1">{getMarketValue(holding, quote)}</span>
            </h2>
          </header>
          <table className="table">
            <tbody>
              <tr>
                <td>Cost</td>
                <td></td>
                <td>${fmt(holding.avgPrice * holding.amount)}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="grid-2-cell sh-grid-cell">
          <header>
            <div style={{ marginBottom: '1px' }}>Your Average Cost</div>
            <h2>
              <span className="lj-type1">${fmt(holding.avgPrice)}</span>
            </h2>
          </header>
          <table className="table">
            <tbody>
              <tr>
                <td>Shares</td>
                <td></td>
                <td>{fmt(holding.amount)}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default StockHoldings;
