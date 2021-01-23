import React from 'react';
import { connect } from 'react-redux';

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
    <form onSubmit={handleSubmit} className={props.className}>
      <input
        type='text'
        className="form-input"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
        placeholder='Amount'
      />
      <div style={{ paddingLeft: '20px' }}>
        <button>Deposit Funds</button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositForm);
