import React from 'react';

import { Section } from '../parts/section';
import { getMarketValue } from '../../selectors/user';
import {
  marketValue,
  cost, avgCost, shares, returnToday, returnTotal } from '../../selectors/holdings';

import fonts from '../../styles/font.module.scss';
import styles from './stock.module.scss';

const StockHoldings = ({ holding, quote }) => {
  const [dailyChange, dailyPct] = returnToday(holding, quote);
  const [totalChange, totalPct] = returnTotal(holding, quote);
  return (
    <Section>
      <div style={{marginTop: '20px'}}/>
      <div className="grid-2">
        <div className={`grid-2-cell ${styles.gridCell}`}>
          <header>
            <div style={{ marginBottom: '1px' }}>Your Market Value</div>
            <h2>
              <span className={fonts.type11}>
                {marketValue(holding, quote)}
              </span>
            </h2>
          </header>
          <table className="table">
            <tbody>
              <tr>
                <td>Cost</td>
                <td></td>
                <td>{cost(holding)}</td>
              </tr>
              <tr>
                <td>Today's Return</td>
                <td></td>
                <td><span className={fonts.type2}>{dailyChange}</span>({dailyPct})</td>
              </tr>
              <tr>
                <td>Total Return</td>
                <td></td>
                <td><span className={fonts.type2}>{totalChange}</span>({totalPct})</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`grid-2-cell ${styles.gridCell}`}>
          <header>
            <div style={{ marginBottom: '1px' }}>Your Average Cost</div>
            <h2>
              <span className={fonts.type11}>
                {avgCost(holding)}
              </span>
            </h2>
          </header>
          <table className="table">
            <tbody>
              <tr>
                <td>Shares</td>
                <td></td>
                <td>{shares(holding)}</td>
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
