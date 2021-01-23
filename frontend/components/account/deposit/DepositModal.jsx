import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ThemedModal from '../../parts/ThemedModal';
import DepositForm from './DepositForm';
import {
  updateBalance,
  openDepositModal,
  closeDepositModal,
} from '../../../actions/user_actions';
import styles from './deposit.module.scss';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  isOpen: Boolean(state.ui.modals.deposit),
});

const mapDispatchToProps = dispatch => ({
  updateBalance: (userId, amount) => dispatch(updateBalance(userId, amount)),
  openDepositModal: () => dispatch(openDepositModal()),
  closeDepositModal: () => dispatch(closeDepositModal()),
});

const DepositModal = ({ isOpen, ...props }) => {

  const toggle = () => {
    if (isOpen) props.closeDepositModal();
    else props.openDepositModal();
  };

  return (
    <ThemedModal isOpen={isOpen}>
      <Modal isOpen={isOpen} toggle={toggle} className={styles.modal}>
        <ModalHeader toggle={toggle} className={styles.modalHeader} >
          Deposit Funds
        </ModalHeader>
        <ModalBody className={styles.modalBody}>
          <DepositForm />
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal);
