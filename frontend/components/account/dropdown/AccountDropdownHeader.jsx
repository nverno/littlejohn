import React from 'react';
import { connect } from 'react-redux';
import {
  getUsername,
  getBuyingPower,
  getPortfolioValue,
} from '../../../selectors/user';
import fonts from '../../../styles/font.module.scss';
import styles from './account.module.scss';

const mapStateToProps = (state, _ownProps) => ({
  name: getUsername(state),
  buyingPower: getBuyingPower(state),             // 
  holdings: state.entities.holdings,
  quotes: state.entities.quotes,
});

const AccountDropdownHeader = ({
  name,
  buyingPower,
  holdings,
  quotes,
  ...props
}) => {
  const portfolioValue = getPortfolioValue(holdings, quotes);

  return (
    <header className={styles.header}>
      <h3 style={{ margin: 0 }}>
        <span className={fonts.type8}>{name}</span>
      </h3>

      <div className={styles.account}>
        <div className={styles.portfolioOuter}>
          <div className={styles.portfolioInner}>
            <span className={fonts.type4}>
              <span>${portfolioValue}</span>
            </span>
          </div>
          <div style={{ height: '2px' }} />
          <div>Portfolio Value</div>
        </div>

        <div className={styles.buyingPower}>
          <div style={{ marginBottom: '0' }}>
            <span className={fonts.type4}>
              <div>
                <h3>${buyingPower}</h3>
              </div>
            </span>
            <div style={{ height: '2px' }} />
            <div>
              <div>Buying Power</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect(mapStateToProps)(AccountDropdownHeader);
