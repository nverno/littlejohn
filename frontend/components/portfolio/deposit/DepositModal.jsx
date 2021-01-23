import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styles from './deposit.module.scss';
import ThemedModal from '../../parts/ThemedModal';
import { updateBalance } from '../../../actions/user_actions';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  updateBalance: (userId, amount) => dispatch(updateBalance(userId, amount)),
});

const DepositModal = ({ isOpen }) => {

  return (
    <ThemedModal isOpen={isOpen}>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal);
