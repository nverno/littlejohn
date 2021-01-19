import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';

import { ListForm } from '../form/ListForm';
import {
  updateList,
  clearListErrors,
  closeEditListModal,
} from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  formType: 'Save',
  errors: state.errors.lists,
  userId: state.session.currentUser.id,
  isOpen: Boolean(state.ui.modals.editList),
  list: state.entities.lists[state.ui.modals.editList],
  state,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (_userId, list) => {
    dispatch(updateList(list));
    dispatch(closeEditListModal());
  },
  clearListErrors: () => dispatch(clearListErrors()),
  closeEditListModal: () => dispatch(closeEditListModal()),
});

const EditListModal = ({ list, isOpen, ...props }) => {
  const afterOpenModal = () => {};
  if (!isOpen) return null;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeEditListModal}
        contentLabel="Edit List"
        className="edit-modal"
        overlayClassName="edit-overlay"
        ariaHideApp={false}
      >
        <div className="edit-list-modal">
          <header className="edit-list-modal-header">
            <span className="lj-type12">
              <span>Edit List</span>
            </span>
            <div className="edit-list-modal-close">
              <button
                type="button"
                className="edit-list-modal-close-button"
                onClick={props.closeEditListModal}
              >
                <AiOutlineClose color="var(--rh__neutral-fg3)" size={24} />
              </button>
            </div>
          </header>

          <div className="edit-list-modal-content">
            <ListForm list={list} {...props} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListModal);
