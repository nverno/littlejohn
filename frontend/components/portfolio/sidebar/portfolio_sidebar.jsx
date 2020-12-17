import React, { Component } from 'react';
import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';

import SidebarContent from '../../parts/sidebar_content';
import PortfolioSidebarHeader from './portfolio_sidebar_header';
import PortfolioHoldings from './portfolio_holdings';
import PortfolioLists from './portfolio_lists';

export default class PortfolioSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarContent {...this.props}>
        <PortfolioSidebarHeader title='Stocks'>
          <button type='button' className="port-sidebar-header-button">
            <BiDotsHorizontalRounded size={24}/>
          </button>
        </PortfolioSidebarHeader>

        <PortfolioHoldings />
        
        <br />
        <PortfolioLists />
        
        <br />
        <PortfolioSidebarHeader title='Following' />

      </SidebarContent>
    );
  }
}
