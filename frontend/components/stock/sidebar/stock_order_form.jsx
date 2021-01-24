import React from 'react';
import { connect } from 'react-redux';
import {
  executeBuy, executeSell,
} from '../../../actions/transactions_actions';
import { getBuyingPower } from '../../../selectors/user';
import { fmt } from '../../../selectors/util';
import fonts from '../../../styles/font.module.scss';
import styles from './stock-order.module.scss';

const mapStateToProps = (state, { symbol }) => ({
  errors: state.errors.transactions,
  buyingPower: getBuyingPower(state),
  shares: (state.entities.holdings[symbol] &&
    state.entities.holdings[symbol].amount),
});

const mapDispatchToProps = (dispatch, { symbol, price }) => ({
  executeBuy: (amount) => dispatch(executeBuy({ symbol, price, amount })),
  executeSell: (amount) => dispatch(executeSell({ symbol, price, amount })),
});

const TabButton = ({ active, onClick, text }) => {
  return (
    <div className={styles.tabOuter}>
      <div className={styles.tabInner}>
        <div className={styles.tabButton + (active ? ` ${styles.panelActive}` : '')}
          role='button'
          onClick={onClick}>
          <h3>
            <span className={(active ? fonts.primary : '') + ` ${fonts.type8}`}>
              {text}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

const BuySellTabs = ({ sell, setSell, symbol, shares }) => {
  return (
    <div className={styles.header}>
      <div className={styles.tabPanel} style={{ border: 'none' }}>
        <div className={styles.tabsOuter}>
          <div className={styles.tabsInner}>
            <TabButton
              text={`Buy ${symbol}`}
              active={!sell}
              onClick={() => setSell(false)}
            />
            {shares &&
              <TabButton
                text={`Sell ${symbol}`}
                active={sell}
                onClick={() => setSell(true)}
              />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ sell, shares, buyingPower, setAmount }) => {
  return (
    <footer className={styles.formFooter}>
      {!sell
        ? (
          <div className={styles.buyingPower}>
            <span className={`${fonts.type4} ${fonts.primary}`}>
              ${buyingPower} Buying Power Available
           </span>
          </div>
        ) : (
          shares &&
          <div>
            <span className={fonts.type4}>
              ${shares} Shares Available -
             </span>
            {' '}
            <a
              onClick={(e) => {
                e.preventDefault();
                setAmount(shares);
              }}
              className={styles.sellAll}>
              Sell All
             </a>
          </div>
        )}
    </footer>
  );
};

const StockOrderForm = ({
  symbol,
  price,
  shares,
  executeSell,
  executeBuy,
  errors,
  buyingPower,
  ...props
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
        className={styles.form}
        onSubmit={() => {
          sell ? executeSell(amount) : executeBuy(amount);
          setAmount('');
          setSell(false);
        }}
      >
        <BuySellTabs sell={sell} setSell={setSell} symbol={symbol} shares={shares} />

        <div className={styles.body}>
          <div>
            <div className={styles.inputOuter}>
              <label className={styles.amountLabel}>
                <span className={fonts.type4}>Shares</span>
              </label>
              <div>
                <div className={styles.amountOuter}>
                  <div className={styles.amountInner}>
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

            <div className={styles.estimateOuter}>
              <div className={styles.amountLabel}>
                <span className={fonts.type4}>Market Price</span>
              </div>
              <div>
                <span className={fonts.type4}>${price}</span>
              </div>
            </div>
          </div>

          <div className={styles.estimateContainer}>
            <div className={styles.estimateOuter}>
              <div className={styles.amountLabel}>
                <span className={fonts.type4}>
                  Est. {sell ? 'Credit' : 'Cost'}
                </span>
              </div>
              <div>
                <span className={fonts.type4}>{estimate()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlsOuter}>
            <div className={`${styles.controlsInner} ${fonts.type8}`}>
              <button type="submit" className={styles.orderButton}>
                Review Order
              </button>
            </div>
          </div>
        </div>

        {renderErrors()}

        <Footer
          sell={sell}
          shares={shares}
          buyingPower={buyingPower}
          setAmount={setAmount} />
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockOrderForm);
