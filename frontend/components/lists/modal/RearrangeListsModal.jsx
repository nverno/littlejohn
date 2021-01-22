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

const RearrangeListsModal = ({ lists }) => {

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

export default connect()(RearrangeListsModal);
