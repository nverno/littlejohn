import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GiCancel } from 'react-icons/gi';

import ThemedModal from '../../parts/ThemedModal';
import {
  updateList, openEditListModal, closeEditListModal
} from '../../../actions/list_actions';
import listStyles from '../lists.module.scss';
import styles from './edit-list.module.scss';

const mapStateToProps = (state, _ownProps) => {
  const listId = state.ui.modals.editList;
  return {
    isOpen: Boolean(listId),
    list: state.entities.lists[listId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list)),
  openEditListModal: (id) => dispatch(openEditListModal(id)),
  closeEditListModal: () => dispatch(closeEditListModal()),
});

const EditListModal = ({ list, isOpen, updateList, ...props }) => {
  if (!isOpen) return null;

  const toggle = () => {
    if (isOpen) props.closeEditListModal();
    else props.openEditListModal();
  };

  const { name, assets } = list;
  return (
    <ThemedModal isOpen={isOpen}>
      <Modal isOpen={isOpen} toggle={toggle} className={styles.modal}>
        <ModalHeader toggle={toggle} className={styles.header}>
          {name}
        </ModalHeader>
        <ModalBody className={styles.body}>
          {assets.map((asset, idx) => (
            <div
              key={idx}
              className={listStyles.container}
              onClick={(e) => {
                e.preventDefault();
                console.log('TODO: Clicked on ', asset, '!');
              }}
            >
              <div className={listStyles.outer}>
                <div className={styles.inner}>
                  <span>{asset}</span>
                  <div>
                    <GiCancel size={24} className={styles.removeIcon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListModal);
