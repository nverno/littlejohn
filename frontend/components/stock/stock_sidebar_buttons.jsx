import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoMdCheckmark } from '@react-icons/all-files/io/IoMdCheckmark';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import { updateList, fetchUserLists } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  const { symbol } = ownProps;
  const { lists } = state.entities;
  let inList = false;

  for (const [key, list] of Object.entries(lists)) {
    if (list.assets.includes(symbol)) {
      inList = true;
      break;
    }
  }

  return {
    lists: state.entities.lists,
    inList,
    lists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list)),
  fetchUserLists: () => dispatch(fetchUserLists()),
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
    const { symbol, updateList, lists, inList } = this.props;
    console.log(lists);
    if (!lists || lists.length === 0) return;
    // FIXME: just puts in first list
    const list = Object.values(lists)[0];
    // console.log(list);
    if (!list.assets.includes(symbol)) {
      list.assets.push(symbol);
    } else {
      list.assets.splice(list.assets.indexOf(symbol), 1);
    }
    updateList(list);
  }

  render() {
    const { symbol, updateList, lists, inList } = this.props;

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
