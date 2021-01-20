import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ListHeader from './List';
import StockCell from './cell/StockCell';
import EditListModal from './modal/EditListModal';
import { maybeFetchSidebarData } from '../../actions/portfolio_actions';
import { getLists, getOpenListSymbols } from '../../selectors/lists';

const mapStateToProps = (state) => ({
  lists: state.entities.lists,
  openLists: state.ui.lists,
  quotes: state.entities.quotes,
});

const mapDispatchToProps = dispatch => ({
  maybeFetchSidebarData: (stateData) => dispatch(maybeFetchSidebarData(stateData)),
});

const all = (arr, fn = Boolean) => arr.every(fn);
const Lists = ({ lists, openLists, quotes, maybeFetchSidebarData, }) => {
  useEffect(() => {
    // if open lists are loaded from localStorage, lists may not be populated...
    if (!quotes || !all(Object.keys(openLists), (lst => lists[lst])))
      return ;

    const symbolsToFetch = getOpenListSymbols({ openLists, lists });
    maybeFetchSidebarData({ symbols: symbolsToFetch, quotes });
  }, [lists, openLists]);
  
  const orderedLists = getLists(lists);
  return (
    <>
      {orderedLists.map((list, idx) => (
        <React.Fragment key={idx}>
          <ListHeader key={`list-${idx}`} list={list} />

          {openLists[list.id] &&
           list.assets.map((symbol, idx) => (
             <StockCell key={`list-${symbol}-${idx}`} symbol={symbol} />
           ))}
        </React.Fragment>
      ))}

      <EditListModal />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
