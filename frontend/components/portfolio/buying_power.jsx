import React from 'react';
import { connect } from 'react-redux';
import { Section } from '../parts/section';

import { getBuyingPower } from '../../selectors/user';
import { updateBalance } from '../../actions/user_actions';
import styles from './buying-power.module.scss';

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
    <div className={styles.deposit}>
      <div className={styles.depositOuter}>
        <form onSubmit={handleSubmit} className={styles.depositForm}>
          <input
            type="text"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            placeholder="Amount"
          />
          <div style={{ paddingLeft: '20px' }}>
            <button className={styles.depositButton}>Deposit Funds</button>
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
    <section>
      <div className={styles.container}>
        <div className={cname}>
          <button
            type="button"
            className={expanded ? styles.expanded : styles.button}
            onClick={() => setExpanded((expandable) => !expandable)}
          >
            <header className={styles.header}>
              <div>
                <span>Buying Power</span>
                <span className={styles.power}>
                  <span>${buyingPower}</span>
                </span>
              </div>
            </header>
          </button>
          {expanded && <DepositFunds {...props} />}
        </div>
      </div>
    </section>    
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyingPower);
