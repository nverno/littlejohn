import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ListHeader from './List';
import StockCell from './cell/StockCell';
import { maybeFetchSidebarData } from '../../actions/portfolio_actions';
import { getLists, getOpenListSymbols } from '../../selectors/lists';

const mapStateToProps = (state) => ({
  lists: getLists(state.entities.lists),
  openLists: state.ui.lists,
  quotes: state.entities.quotes,
  symbols: getOpenListSymbols(state),
});

const mapDispatchToProps = dispatch => ({
  maybeFetchSidebarData: (stateData) => dispatch(maybeFetchSidebarData(stateData)),
});

const Lists = ({ lists, openLists, quotes, symbols, maybeFetchSidebarData, }) => {
  useEffect(() => {
    maybeFetchSidebarData({ symbols, quotes });
  }, [openLists]);
  
  return (
    <>
      {lists.map((list, idx) => (
        <React.Fragment key={idx}>
          <ListHeader key={`list-${idx}`} list={list} />

        {openLists[list.id] &&
         list.assets.map((symbol, idx) => (
           <StockCell key={`list-${symbol}-${idx}`} symbol={symbol} />
         ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
