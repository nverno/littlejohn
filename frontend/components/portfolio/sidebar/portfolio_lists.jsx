import React from 'react';
import { connect } from 'react-redux';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import PortfolioSidebarHeader from './portfolio_sidebar_header';
import ListCell from '../../lists/list_cell';
import ListForm from '../../lists/list_form';
import StockCell from './stock_cell';
import { clearListErrors } from '../../../actions/list_actions';

const mapStateToProps = (state, _ownProps) => ({
  lists: state.entities.lists,
  openLists: state.ui.lists,
  userId: state.session.currentUser.id,
  state,
});

const mapDispatchToProps = (dispatch, { userId }) => ({
  clearListErrors: () => dispatch(clearListErrors()),
});

const PortfolioLists = ({ clearListErrors, lists, openLists }) => {
  const [listFormOpen, setListFormOpen] = React.useState(false);

  return (
    <>
      <PortfolioSidebarHeader title="Lists">
        <button
          type="button"
          className="port-sidebar-header-button"
          onClick={() => {
            clearListErrors();
            setListFormOpen((listFormOpen) => !listFormOpen);
          }}
        >
          <AiOutlinePlus size={24} />
        </button>
      </PortfolioSidebarHeader>

      {listFormOpen && <ListForm setOpen={setListFormOpen} />}

      {Object.keys(lists).map((listId, idx) => (
        <React.Fragment key={idx}>
          <ListCell key={`list-${idx}`} listId={listId} />

          {openLists[listId] &&
            lists[listId].assets.map((symbol, idx) => (
              <StockCell key={`list-${symbol}-${idx}`} symbol={symbol} />
            ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioLists);
