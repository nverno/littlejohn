import React from 'react';
import { connect } from 'react-redux';
import { Section } from '../parts/section';

import { getBuyingPower } from '../../selectors/user';
import { updateBalance } from '../../actions/user_actions';

// import { ShowMoreButton } from '../parts/buttons';
const mapStateToProps = (state, ownProps) => ({
  buyingPower: getBuyingPower(state),
  userId: state.session.currentUser.id,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  updateBalance: (userId, amount) => dispatch(updateBalance(userId, amount)),
});

const DepositFunds = ({ userId, updateBalance }) => {
  const [amount, setAmount] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBalance(userId, amount);
    setAmount('');
  };

  return (
    <div className="bp-deposit-container">
      <div className="bp-deposit-outer">
        <form onSubmit={handleSubmit} className="bp-deposit-form">
          <input
            type="text"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            placeholder="Amount"
          />
          <div style={{ paddingLeft: '20px' }}>
            <button className="login-submit">Deposit Funds</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BuyingPower = ({ buyingPower, ...props }) => {
  const [expanded, setExpanded] = React.useState(false);
  const cname = expanded ? 'expanded-item' : 'expandable-item';

  return (
    <div className="bp-container">
      <div className={cname}>
        <button
          type="button"
          className="bp-button"
          onClick={() => setExpanded((expandable) => !expandable)}
        >
          <header className="bp-header">
            <div>
              <span className="lj-type8">Buying Power</span>
              <span className="bp-buying-power-container">
                <span className="lj-type8">${buyingPower}</span>
              </span>
            </div>
          </header>
        </button>
        {expanded && <DepositFunds {...props} />}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyingPower);
