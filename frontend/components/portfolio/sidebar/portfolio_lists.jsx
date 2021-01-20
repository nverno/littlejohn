import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';

import PortfolioSidebarHeader from './portfolio_sidebar_header';
import Lists from '../../lists/Lists';
import ListForm from '../../lists/form/ListForm';
import { clearListErrors } from '../../../actions/list_actions';
import { fetchSidebarListsData } from '../../../actions/portfolio_actions';
import styles from './psidebar.module.scss';

const mapStateToProps = (state, _ownProps) => ({
  // lists: getLists(state.entities.lists),
  // openLists: state.ui.lists,
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
    const { clearListErrors, } = this.props;
    const { listFormOpen } = this.state;

    return (
      <>
        <PortfolioSidebarHeader title="Lists">
          <button
            type="button"
            className={styles.headerButton}
            onClick={() => {
              clearListErrors();
              this.toggleForm();
            }}
          >
            <AiOutlinePlus size={24} />
          </button>
        </PortfolioSidebarHeader>

        {listFormOpen && <ListForm setOpen={this.toggleForm} />}
        <Lists />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioLists);
