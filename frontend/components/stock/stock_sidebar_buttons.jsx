import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoMdCheckmark } from '@react-icons/all-files/io/IoMdCheckmark';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import {
  fetchUserLists, openSelectListModal
} from '../../actions/list_actions';
import { isWatched } from '../../selectors/lists';

const mapStateToProps = (state, { symbol }) => {
  const { lists } = state.entities;
  return {
    lists,
    inList: isWatched(symbol, lists)
  };
};

const mapDispatchToProps = (dispatch, { symbol }) => ({
  fetchUserLists: () => dispatch(fetchUserLists()),
  openSelectListModal: () => dispatch(openSelectListModal(symbol)),
});

class StockSidebarButtons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserLists();
  }

  handleClick(e) {
    e.preventDefault();
    // FIXME: what about when there are no lists?
    this.props.openSelectListModal();
  }

  render() {
    const { inList } = this.props;

    return (
      <div className="stock-sidebar-buttons">
        <div>
          <button
            type="button"
            className="stock-sidebar-list-button"
            onClick={this.handleClick}
          >
            <div className="stock-sidebar-button-text">
              <span className="stock-sidebar-button-inner">
                {inList ? (
                  <IoMdCheckmark color="var(--rh__primary-base)" size={24} />
                ) : (
                    <AiOutlinePlus color="var(--rh__primary-base)" size={24} />
                  )}{' '}
                <span className="lj-type4">Add to Lists</span>
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockSidebarButtons);
