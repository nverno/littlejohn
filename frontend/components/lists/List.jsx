import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';

import ListIcon from './ListIcon';
import {
  closeList,
  openList,
  openEditListModal,
} from '../../actions/list_actions';

const mapStateToProps = (state, { list: { id } }) => {
  return {
    open: state.ui.lists[id],
  };
};

const mapDispatchToProps = (dispatch, { list: { id } }) => ({
  closeList: () => dispatch(closeList(id)),
  openList: () => dispatch(openList(id)),
  openEditListModal: () => dispatch(openEditListModal(id)),
});

const List = ({
  list,
  open,
  closeList,
  openList,
  ...props
}) => {
  if (!list) return null;

  const caret = (
    <span className="list-cell-caret">
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    else openList();
  };

  const { name, id: listId } = list;
  return (
    <div className="list-cell-container">
      <div className="list-cell-outer">
        <div className="list-cell-button">
          <div className="list-cell-inner">
            <div className="list-cell-label-container">
              <Link to={`/lists/${listId}`} className="list-cell-link">
                <ListIcon />
                <div className="list-cell-name">
                  <span className="lj-type1">{name}</span>
                </div>
              </Link>
            </div>

            <div className="list-cell-overflow-menu">
              <button
                type="button"
                className="list-cell-overflow-button"
                onClick={() => props.openEditListModal()}
              >
                <BiDotsHorizontalRounded size={24} />
              </button>
            </div>

            <div className="list-cell-toggle-container" onClick={toggleList}>
              <div className="list-cell-caret-container">{caret}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
