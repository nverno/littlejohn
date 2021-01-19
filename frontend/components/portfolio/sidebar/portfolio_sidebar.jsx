import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';

import styles from './psidebar.module.scss';
import SidebarContent from '../../parts/sidebar_content';
import PortfolioSidebarHeader from './portfolio_sidebar_header';
import PortfolioHoldings from './portfolio_holdings';
import PortfolioLists from './portfolio_lists';
import PortfolioFollowing from './portfolio_following';
// import { getOpenListSymbols } from '../../../selectors/lists';
// import { fetchSidebarData } from '../../../actions/portfolio_actions';

// const mapStateToProps = (state, _ownProps) => {
//   const { quotes, holdings } = state.entities;
//   const symbols = Object.keys(holdings).concat(getOpenListSymbols(state));

//   return ({
//     symbols,
//     quotes,
//   });
// };

// const mapDispatchToProps = dispatch => ({
//   fetchSidebarData: (stateData) => dispatch(fetchSidebarData(stateData)),
// });

export default class PortfolioSidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchSidebarData({
    //   symbols: this.props.symbols,
    //   quotes: this.props.quotes
    // });
  }

  render() {
    return (
      <SidebarContent {...this.props}>
        <PortfolioSidebarHeader title="Stocks">
          <button type="button" className={styles.headerButton}>
            <BiDotsHorizontalRounded size={24} />
          </button>
        </PortfolioSidebarHeader>

        <PortfolioHoldings />

        <PortfolioLists />

        <PortfolioFollowing />
      </SidebarContent>
    );
  }
}
// export default connect(
// mapStateToProps, mapDispatchToProps
// )(PortfolioSidebar);
