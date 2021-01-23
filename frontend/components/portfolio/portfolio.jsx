import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import PortfolioSidebar from './sidebar/portfolio_sidebar';
// import EditListModal from '../lists/modal/EditListModal';
import PopularLists from './popular_lists';
import BuyingPower from './deposit/buying_power';
import PortfolioGraphContainer from './graph/portfolio_graph_container';

import styles from './portfolio.module.scss';

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
          <div className='col-12'>
            <section className={styles.graph}>
              <PortfolioGraphContainer />
            </section>

            <BuyingPower />

            <PopularLists />

            <section className={styles.news}>
              Popular Lists & News
            </section>
          </div>

          <div className="col-5">
            <PortfolioSidebar {...this.props} />
          </div>
        </div>

        {/* <EditListModal /> */}
      </HeaderPage>
    );
  }
}
