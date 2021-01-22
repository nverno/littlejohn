import React from 'react';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { BsListCheck } from 'react-icons/bs';

import { removeList, openListModal } from '../../../actions/list_actions';
import styles from './dropdown.module.scss';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch, { list: { id } }) => ({
  removeList: () => dispatch(removeList(id)),
  openEditModal: () => dispatch(openListModal('edit', id)),
});

const ListDropdown = ({ list, theme, removeList, openEditModal, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`${theme}`}>
      <ButtonDropdown isOpen={isOpen} toggle={toggle} direction="down">
        <DropdownToggle
          color="transparent"
          className={styles.toggle}
          data-toggle='modal'
        >
          <BiDotsHorizontalRounded size={24} color="transparent" />
        </DropdownToggle>

        <DropdownMenu className={`overlay ${styles.menu}`} right={true}>
          <DropdownItem onClick={() => openEditModal()} className={styles.item}>
            <span>
              <BsListCheck size={24} />
            </span>
            <span>Edit List</span>
          </DropdownItem>

          <DropdownItem onClick={removeList} className={styles.item}>
            <span>
              <TiDeleteOutline size={24} />
            </span>
            <span>Delete List</span>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDropdown);
