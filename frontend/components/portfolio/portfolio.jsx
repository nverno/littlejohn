import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import PortfolioSidebar from './sidebar/portfolio_sidebar';
import EditListModal from '../lists/edit_list_modal';
import PopularLists from './popular_lists';
import BuyingPower from './buying_power';
import PortfolioGraphContainer from './graph/portfolio_graph_container';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { holdings, quotes, symbols } = this.props;
    // this.props.fetchPortfolioData({ symbols, quotes, holdings });
  }

  render() {
    return (
      <HeaderPage>
        <div className="row">
          <div className="col-12 portfolio-col-left">
            <section className="portfolio-graph-section">
              <PortfolioGraphContainer />
            </section>

            <BuyingPower />

            <PopularLists />

            <section className="portfolio-news-section">
              Popular Lists & News
            </section>
          </div>

          <div className="col-5 portfolio-col-right">
            <PortfolioSidebar {...this.props} />
          </div>
        </div>

        <EditListModal />
      </HeaderPage>
    );
  }
}
