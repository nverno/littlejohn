import React from 'react';
import { connect } from 'react-redux';

import styles from './deposit.module.scss';
import { updateBalance } from '../../../actions/user_actions';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  updateBalance: (userId, amount) => dispatch(updateBalance(userId, amount)),
});

const DepositForm = ({ userId, updateBalance, ...props }) => {
  const [amount, setAmount] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBalance(userId, amount);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={props.className || styles.depositForm}>
      <input
        type='text'
        className={`form-input ${styles.depositInput}`}
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
        placeholder='Amount'
      />
      <div style={{ paddingLeft: '20px' }}>
        <button className={styles.depositButton}>Deposit Funds</button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositForm);
