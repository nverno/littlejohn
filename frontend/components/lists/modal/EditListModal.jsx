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
import RenameForm from '../form/RenameForm';
import AssetCell from './AssetCell';
import {
  updateList,
  openListModal,
  closeListModals,
} from '../../../actions/list_actions';
import styles from './edit-list.module.scss';

const mapStateToProps = (state, _ownProps) => {
  const listId = state.ui.modals.lists.edit;
  return {
    isOpen: Boolean(listId),
    list: state.entities.lists[listId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list)),
  openModal: (id) => dispatch(openListModal('edit', id)),
  closeListModals: () => dispatch(closeListModals()),
  removeAsset: (asset, list) => dispatch(updateList({
    ...list,
    assets: list.assets.filter(el => el !== asset),
  })),
});

const DragHandle = SortableHandle(() => (
  <span className={styles.burger}>
    <GiHamburgerMenu size={24} color="var(--st__neutral-fg2)" />
  </span>
));

const SortableItem = SortableElement(({ item, ...props }) => (
  <AssetCell
    handle={<DragHandle />}
    asset={item}
    {...props} />
));

const SortableList = SortableContainer(({ items, ...props }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <SortableItem
          item={item}
          key={`item-${item}`}
          index={idx}
          {...props} />
      ))}
    </div>
  );
});

const EditListModal = ({ list, isOpen, updateList, removeAsset, ...props }) => {
  if (!isOpen) return null;

  const toggle = () => {
    if (isOpen) props.closeListModals();
    else props.openModal();
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
          <RenameForm list={list} updateList={updateList} />
        </ModalHeader>
        <ModalBody className={styles.body}>
          <SortableList
            items={assets}
            onSortEnd={onSortEnd}
            removeAsset={(asset) => removeAsset(asset, list) }
            useDragHandle {...props} />
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListModal);
