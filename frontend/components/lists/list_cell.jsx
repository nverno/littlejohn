import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';

import { maybeFetchSidebarData } from '../../actions/portfolio_actions';
import { getOpenListSymbols } from '../../selectors/lists';
import ListIcon from './list_icon';
import {
  closeList,
  openList,
  openEditListModal,
} from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.entities.lists[ownProps.listId],
    open: state.ui.lists[ownProps.listId],
    symbols: getOpenListSymbols(state),
    quotes: state.entities.quotes,
    // state,
  };
};

const mapDispatchToProps = (dispatch, { listId }) => ({
  closeList: () => dispatch(closeList(listId)),
  openList: () => dispatch(openList(listId)),
  openEditListModal: () => dispatch(openEditListModal(listId)),
  maybeFetchSidebarData: (stateData) =>
    dispatch(maybeFetchSidebarData(stateData)),
});

const ListCell = ({
  quotes,
  listId,
  list,
  open,
  closeList,
  openList,
  maybeFetchSidebarData,
  ...props
}) => {
  const caret = (
    <span className="list-cell-caret">
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    else {
      maybeFetchSidebarData({ symbols: list.assets, quotes });
      openList();
    }
  };

  return (
    <div className="list-cell-container">
      <div className="list-cell-outer">
        <div className="list-cell-button">
          <div className="list-cell-inner">
            <div className="list-cell-label-container">
              <Link to={`/lists/${listId}`} className="list-cell-link">
                <ListIcon />
                <div className="list-cell-name">
                  <span className="lj-type1">{list.name}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCell);
