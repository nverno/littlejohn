import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {
  SortableContainer,
  SortableElement
} from 'react-sortable-hoc';
import { arrayMove } from '../../../lib/array-move';

import ThemedModal from '../../parts/ThemedModal';
import ListCell from './ListCell';
import styles from './order-lists.module.scss';
import { updateList, closeListModals, openListModal } from '../../../actions/list_actions';
import { getLists } from '../../../selectors/lists';

const mapStateToProps = (state) => ({
  isOpen: Boolean(state.ui.modals.lists.order),
  lists: state.entities.lists,
});

const mapDispatchToProps = dispatch => ({
  updateList: (list) => dispatch(updateList(list)),
  openModal: () => dispatch(openListModal('order', true)),
  closeListModals: () => dispatch(closeListModals()),
});

const SortableItem = SortableElement(({ item, ...props }) => (
  <ListCell
    list={item}
    {...props} />
));

const SortableList = SortableContainer(({ items, ...props }) => {
  return (
    <div className={styles.items}>
      {items.map((item, idx) => (
        <SortableItem
          item={item}
          key={`item-${item.name}`}
          index={idx}
          {...props} />
      ))}
    </div>
  );
});

const OrderListsModal = ({ lists, isOpen, updateList, ...props }) => {
  if (!isOpen) return null;
  const ordered = getLists(lists);
  
  const toggle = () => {
    if (isOpen) props.closeListModals();
    else props.openModal();
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let lsts = arrayMove(ordered, oldIndex, newIndex);
    for (let i = 0; i < lsts.length; i++) {
      updateList({ ...lsts[i], index: i });
    }
  };

  return (
    <ThemedModal isOpen={isOpen}>
      <Modal isOpen={isOpen} toggle={toggle} className={styles.modal}>
        <ModalHeader toggle={toggle} className={styles.header}>
          Drag to Rearrange Lists
        </ModalHeader>
        <ModalBody className={styles.body}>
          <SortableList
            items={ordered}
            onSortEnd={onSortEnd}
            {...props} />
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListsModal);
