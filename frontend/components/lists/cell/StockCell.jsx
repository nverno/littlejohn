import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  quoteClass,
  positiveChange,
  quotePercent,
  quotePrice,
} from '../../../selectors/quotes';
import { fmt } from '../../../selectors/util';

import fonts from '../../../styles/font.module.scss';
import styles from './stock-cell.module.scss';
import StockCellGraph from './StockCellGraph';
import { getPrices } from '../../../selectors/prices';

const mapStateToProps = (state, ownProps) => {
  const { holdings, quotes, prices } = state.entities;
  const { symbol } = ownProps;
  return {
    holding: holdings[symbol],
    quote: quotes[symbol],
    data: prices[symbol] ? getPrices(prices[symbol]['1d']) : null,
  };
};

const StockCellPercent = ({ quote }) => {
  const cname = quoteClass(quote);

  return (
    <span className={cname}>
      <span className={`${fonts.type1} ${styles.percentChange}`}>
        {quotePercent(quote)}
      </span>
    </span>
  );
};

class StockCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { symbol, quote, holding, data } = this.props;

    return (
      <div className={styles.cellContainer}>
        <Link to={`/stocks/${symbol}`} className={styles.cellLink}>
          <div className={styles.cellLeft}>
            <div className={styles.symbolContainer}>
              <span className={`${fonts.type2} ${styles.symbol}`}>{symbol}</span>
            </div>

            {holding && (
              <div className={styles.holdings}>
                <div style={{ minWidth: '0px' }}>
                  <span className={fonts.type1}>{fmt(holding.amount)} Sha..</span>
                </div>
              </div>
            )}
          </div>

          {data && (
            <StockCellGraph
              positive={positiveChange(quote)}
              data={data}
              symbol={symbol}
            />
          )}

          <div className={styles.cellRight}>
            <span className={fonts.type7}>
              <div className={styles.price}>
                <span className={fonts.type1}>{quotePrice(quote)}</span>
                <div style={{ height: '2px' }} />
                <StockCellPercent quote={quote} />
              </div>
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StockCell);
