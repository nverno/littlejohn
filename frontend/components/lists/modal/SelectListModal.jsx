import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';

import NewListForm from '../form/ListForm';
import ThemedModal from '../../parts/ThemedModal';
import ListIcon from '../../lists/icons/ListIcon';
import {
  updateList,
  closeListModals,
  openListModal,
  clearListErrors,
} from '../../../actions/list_actions';
import { listContains } from '../../../selectors/lists';
import portStyles from '../../portfolio/sidebar/psidebar.module.scss';
import styles from './select-list.module.scss';

const mapStateToProps = (state, ownProps) => ({
  lists: state.entities.lists,
  isOpen: Boolean(state.ui.modals.lists.select),
  asset: state.ui.modals.lists.select,
});

const mapDispatchToProps = dispatch => ({
  updateList: (list) => dispatch(updateList(list)),
  closeListModals: () => dispatch(closeListModals()),
  openModal: (asset) => dispatch(openListModal('select', asset)),
  clearListErrors: () => dispatch(clearListErrors()),
});

const CreateList = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.createContainer}>
      <div className={styles.createList}>
        <div className={styles.listIcon}>
          <button
            type="button"
            className={portStyles.headerButton}
            onClick={() => {
              clearListErrors();
              setOpen(!open);
            }}
          >
            <ListIcon
              icon={<AiOutlinePlus
                      size={24}
                      color='var(--rh__semantic-positive-base)'/>}/>
          </button>
        </div>
        <div>Create New List</div>
      </div>
      {open && <NewListForm setOpen={setOpen} />}
    </div>
  );
};

const ListItem = ({ list, asset, updateList }) => {
  const isMember = listContains(list, asset);

  const handleClick = (e) => {
    e.preventDefault();
    const assets = isMember
        ? list.assets.filter(el => el !== asset)
        : list.assets.concat([asset]);

    updateList({
      ...list,
      assets,
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.checkContainer}
           onClick={handleClick}>
        {isMember
         ? <GrCheckboxSelected size={24} color='var(--rh__semantic-positive-base)'/>
         : <GrCheckbox size={24} color='var(--rh__neutral-fg1)' />}
      </div>
      <div className={styles.ListIcon}>
        <ListIcon />
      </div>
      <div className={styles.nameContainer}>
        <div>{list.name}</div>
        <div className={styles.listSize}>{list.size} items</div>
      </div>
    </div>
  );
};

const SelectListModal = ({ asset, lists, isOpen, ...props }) => {
  if (!isOpen) return null;

  const toggle = () => {
    if (isOpen) props.closeListModals();
    else props.openModal(asset);
  };

  return (
    <ThemedModal isOpen={isOpen}>
      <Modal isOpen={isOpen} toggle={toggle} className={styles.modal}>
        <ModalHeader toggle={toggle} className={styles.header}>
          Add/Remove {asset} from List(s)
        </ModalHeader>
        <ModalBody className={styles.body}>
          <div>
            <div className={styles.checkContainer} />
            <CreateList />
          </div>

          {Object.values(lists).map((list, idx) => (
            <ListItem asset={asset} list={list} key={idx} {...props} />
          ))}
        </ModalBody>
      </Modal>
    </ThemedModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectListModal);
