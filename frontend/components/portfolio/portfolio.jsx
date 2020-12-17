import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';

import HeaderPage from '../header/header_page';
import GraphNav from '../graph/graph_nav';
// import SampleGraph from './portfolio_sample.png';
import PortfolioSidebar from './sidebar/portfolio_sidebar';
import EditListModal from '../lists/edit_list_modal';
// import { Section, SectionHeader } from '../parts/section';
import PopularLists from './popular_lists';
import BuyingPower from './buying_power';

const navIntervals = ['1D', '1W', '1M', '3M', '1Y', '5Y', 'All'];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: '1D',
    };
    this.updateInterval = this.updateInterval.bind(this);
  }

  componentDidMount() {
    const { holdings, quotes, symbols } = this.props;
    this.props.fetchPortfolioData({ symbols, quotes, holdings });
  }

  updateInterval(interval) {
    this.setState({ interval });
  }

  render() {
    return (
      <HeaderPage>
        <div className="row">
          <div className="col-12 portfolio-col-left">
            <section className="portfolio-graph-section">
              {/* <img src={SampleGraph} /> */}
              <GraphNav
                intervals={navIntervals}
                updateInterval={this.updateInterval}
              />
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
