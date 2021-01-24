import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoMdCheckmark } from '@react-icons/all-files/io/IoMdCheckmark';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import {
  fetchUserLists,
  openListModal,
} from '../../../actions/list_actions';
import { isWatched } from '../../../selectors/lists';
import fonts from '../../../styles/font.module.scss';
import styles from './stock-order.module.scss';

const mapStateToProps = (state, { symbol }) => {
  const { lists } = state.entities;
  return {
    lists,
    inList: isWatched(symbol, lists)
  };
};

const mapDispatchToProps = (dispatch, { symbol }) => ({
  fetchUserLists: () => dispatch(fetchUserLists()),
  openSelectModal: () => dispatch(openListModal('select', symbol)),
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
    this.props.openSelectModal();
  }

  render() {
    const { inList } = this.props;

    return (
      <div className={styles.sidebarButtons}>
        <div>
          <button
            type="button"
            className={styles.listButton}
            onClick={this.handleClick}
          >
            <div className={styles.listButtonText}>
              <span className={styles.listButtonInner}>
                {inList ? (
                  <IoMdCheckmark color="var(--rh__primary-base)" size={24} />
                ) : (
                    <AiOutlinePlus color="var(--rh__primary-base)" size={24} />
                  )}{' '}
                <span className={fonts.type4}>Add to Lists</span>
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
