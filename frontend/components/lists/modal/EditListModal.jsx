import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  SortableHandle,
  SortableContainer,
  SortableElement
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import ThemedModal from '../../parts/ThemedModal';
import ListCell from './ListCell';
import {
  updateList, openEditListModal, closeEditListModal
} from '../../../actions/list_actions';
// import listStyles from '../lists.module.scss';
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

const DragHandle = SortableHandle(() => (
  <span className="burger">
    <GiHamburgerMenu size={24} color="var(--st__neutral-fg2)" />
  </span>
));

const SortableItem = SortableElement(({ item }) => (
  <ListCell handle={<DragHandle />} asset={item} />
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <SortableItem item={item} key={`item-${item}`} index={idx} />
      ))}
    </div>
  );
});

const EditListModal = ({ list, isOpen, updateList, ...props }) => {
  if (!isOpen) return null;

  const toggle = () => {
    if (isOpen) props.closeEditListModal();
    else props.openEditListModal();
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateList({
      ...list,
      assets: arrayMove(list.assets, oldIndex, newIndex)
    });
  };

  const { name, assets } = list;
  return (
    <ThemedModal isOpen={isOpen}>
      <Modal isOpen={isOpen} toggle={toggle} className={styles.modal}>
        <ModalHeader toggle={toggle} className={styles.header}>
          {name}
        </ModalHeader>
        <ModalBody className={styles.body}>
          <SortableList items={assets} onSortEnd={onSortEnd} />
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListModal);
