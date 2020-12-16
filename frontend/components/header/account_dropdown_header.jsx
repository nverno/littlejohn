import React from 'react';
import { connect } from 'react-redux';
import {
  getUsername,
  getBuyingPower,
  getPortfolioValue,
} from '../../selectors/user';

const mapStateToProps = (state, _ownProps) => ({
  name: getUsername(state),
  buyingPower: getBuyingPower(state),
  // TODO: implement this
  portfolioValue: getPortfolioValue(state),
});

const AccountDropdownHeader = ({
  name,
  buyingPower,
  portfolioValue,
  ...props
}) => {
  return (
    <header className="lj-acct-drop-header">
      <h3 style={{ margin: 0 }}>
        <span className="lj-type8">{name}</span>
      </h3>

      <div className="lj-acct-drop-account">
        <div className="lj-acct-drop-portfolio-outer">
          <div className="lj-acct-drop-portfolio-inner">
            <span className="lj-type4">
              <span>${portfolioValue}</span>
            </span>
          </div>
          <div style={{ height: '2px' }} />
          <div>Portfolio Value</div>
        </div>

        <div className="lj-acct-drop-buying-power">
          <div style={{ marginBottom: '0' }}>
            <span className="lj-type4">
              <div>
                <h3>{buyingPower}</h3>
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
