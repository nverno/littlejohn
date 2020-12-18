import React from 'react';
import { connect } from 'react-redux';
import { executeBuy, executeSell } from '../../actions/transactions_actions';
import { getBuyingPower } from '../../selectors/user';

const mapStateToProps = (state) => ({
  errors: state.errors.transactions,
  buyingPower: getBuyingPower(state),
  state,
});

const mapDispatchToProps = (dispatch, { symbol, price }) => ({
  executeBuy: (amount) => dispatch(executeBuy({ symbol, price, amount })),
  executeSell: (amount) => dispatch(executeSell({ symbol, price, amount })),
});

const StockOrderForm = ({
  symbol,
  price,
  executeSell,
  executeBuy,
  errors,
  buyingPower,
}) => {
  const [amount, setAmount] = React.useState('');
  const [sell, setSell] = React.useState(false);

  const estimate = () => {
    return amount > 0 ? amount * price : 0;
  };

  const renderErrors = () => {
    return (
      <ul className="list-errors">
        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  };

  return (
    <div>
      <form
        className="stock-order-form"
        onSubmit={() => {
          sell ? executeSell(amount) : executeBuy(amount);
          setAmount('');
        }}
      >
        <div className="stock-order-form-header">
          <div className="stock-order-tab-panel" style={{ border: 'none' }}>
            <div className="stock-order-tabs-outer">
              <div className="stock-order-buy-outer">
                <div className="stock-order-buy-inner">
                  <div
                    className={
                      (sell ? '' : 'panel-active') + ' stock-order-tab-button'
                    }
                    role="button"
                    onClick={() => setSell(false)}
                  >
                    <h3>
                      <span className={(sell ? '' : 'lj-primary') + ' type8'}>
                        Buy {symbol}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="stock-order-sell-outer">
                <div className="stock-order-sell-inner">
                  <div
                    className={
                      (!sell ? '' : 'panel-active') + ' stock-order-tab-button'
                    }
                    role="button"
                    onClick={() => setSell(true)}
                  >
                    <h3>
                      <span className={(sell ? 'lj-primary' : '') + ' type8'}>
                        Sell {symbol}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stock-order-form-body">
          <div>
            <div className="stock-order-input-outer">
              <label className="stock-order-amount-label">
                <span className="lj-type4">Shares</span>
              </label>
              <div>
                <div className="stock-order-amount-input-outer">
                  <div className="stock-order-amount-input-inner">
                    <input
                      type="number"
                      className="form-input"
                      value={amount > 0 ? amount : ''}
                      onChange={(e) => setAmount(e.currentTarget.value)}
                      placeholder="$0.00"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="stock-order-estimate-outer">
              <div className="stock-order-amount-label">
                <span className="lj-type4">Market Price</span>
              </div>
              <div className="stock-order-estimate">
                <span className="lj-type4">${price}</span>
              </div>
            </div>
          </div>

          <div className="stock-order-estimate-container">
            <div className="stock-order-estimate-outer">
              <div className="stock-order-amount-label">
                <span className="lj-type4">
                  Est. {sell ? 'Credit' : 'Cost'}
                </span>
              </div>
              <div className="stock-order-estimate">
                <span className="lj-type4">{estimate()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stock-order-form-controls">
          <div className="stock-order-form-outer">
            <div className="stock-order-form-inner lj-type8">
              <button type="submit" className="stock-order-form-button">
                Review Order
              </button>
            </div>
          </div>
        </div>

        <footer className="stock-order-form-footer">
          <div className="stock-order-form-buying-power">
            <span className="lj-type4">
              ${buyingPower} Buying Power Available
            </span>
          </div>

          {renderErrors()}
        </footer>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockOrderForm);
