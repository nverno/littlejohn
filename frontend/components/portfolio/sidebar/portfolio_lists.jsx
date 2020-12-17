import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import PortfolioSidebarHeader from './portfolio_sidebar_header';
import ListCell from '../../lists/list_cell';
import ListForm from '../../lists/list_form';
import StockCell from './stock_cell';
import { clearListErrors } from '../../../actions/list_actions';
import { fetchSidebarListsData } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, _ownProps) => ({
  lists: state.entities.lists,
  openLists: state.ui.lists,
  userId: state.session.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  clearListErrors: () => dispatch(clearListErrors()),
  fetchSidebarListsData: () => dispatch(fetchSidebarListsData()),
});

class PortfolioLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFormOpen: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchSidebarListsData();
  }

  toggleForm() {
    this.setState({ listFormOpen: !this.state.listFormOpen });
  }

  render() {
    const { clearListErrors, lists, openLists } = this.props;
    const { listFormOpen } = this.state;

    return (
      <>
        <PortfolioSidebarHeader title="Lists">
          <button
            type="button"
            className="port-sidebar-header-button"
            onClick={() => {
              clearListErrors();
              this.toggleForm();
            }}
          >
            <AiOutlinePlus size={24} />
          </button>
        </PortfolioSidebarHeader>

        {listFormOpen && <ListForm setOpen={this.toggleForm} />}

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioLists);
