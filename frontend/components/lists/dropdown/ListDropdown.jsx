import React from 'react';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { BsListCheck } from 'react-icons/bs';

import { removeList, openEditListModal } from '../../../actions/list_actions';
import styles from './dropdown.module.scss';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, { list: { id } }) => ({
  removeList: () => dispatch(removeList(id)),
  openEditListModal: () => dispatch(openEditListModal(id)),
});


const ListDropdown = ({ list, removeList, openEditListModal, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [editModalOpen, setEditModalOpen] = React.useState(false);
  // const toggleEditModal = () => setEditModalOpen(!editModalOpen);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <ButtonDropdown isOpen={isOpen} toggle={toggle} direction="down">
        <DropdownToggle
          color="transparent"
          /* FIXME: color on hover */
          className={styles.toggle}
          data-toggle='modal'
        >
          <BiDotsHorizontalRounded size={24} color="transparent" />
        </DropdownToggle>

        <DropdownMenu className={styles.menu} right={true}>
          <DropdownItem onClick={() => openEditListModal()} >
            <span>
              <BsListCheck size={24} />
            </span>
            Edit List
          </DropdownItem>

          <DropdownItem onClick={removeList}>
            <span>
              <TiDeleteOutline size={24} />
            </span>
            Delete List
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDropdown);
