import React, { Component } from 'react';
import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';

import SidebarContent from '../../parts/sidebar_content';
import PortfolioSidebarHeader from './portfolio_sidebar_header';
import PortfolioHoldings from './portfolio_holdings';
import PortfolioLists from './portfolio_lists';
import PortfolioFollowing from './portfolio_following';

export default class PortfolioSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarContent {...this.props}>
        <PortfolioSidebarHeader title="Stocks">
          <button type="button" className="port-sidebar-header-button">
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
