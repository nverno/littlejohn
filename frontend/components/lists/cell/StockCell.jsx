import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  positiveChange,
  quotePercent,
  quotePrice,
} from '../../../selectors/quotes';

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
  const cname = positiveChange(quote) ? 'lj-positive' : 'lj-negative';

  return (
    <span className={cname}>
      <span className="lj-type1 stock-cell-percent-change">
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
      <div className="stock-cell-container">
        <Link to={`/stocks/${symbol}`} className="stock-cell-link">
          <div className="stock-cell-left">
            <div className="stock-cell-symbol-container">
              <span className="lj-type2 stock-cell-symbol">{symbol}</span>
            </div>

            {holding && (
              <div className="stock-cell-holdings-container">
                <div style={{ minWidth: '0px' }}>
                  <span className="lj-type1">{holding.amount} Sha..</span>
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

          <div className="stock-cell-right">
            <span className="lj-type7">
              <div className="stock-cell-price-container">
                <span className="lj-type1">{quotePrice(quote)}</span>
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
