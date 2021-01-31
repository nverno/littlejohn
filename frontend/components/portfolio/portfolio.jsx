import React from 'react';

import HeaderPage from '../header/header_page';
import PortfolioSidebar from './sidebar/portfolio_sidebar';
import PopularLists from './popular_lists';
import BuyingPower from './buying/BuyingPower';
import PortfolioGraphContainer from './graph/portfolio_graph_container';
import PortfolioNews from './PortfolioNews';

import styles from './portfolio.module.scss';

const Portfolio = ({ ...props }) => {
  return (
    <HeaderPage>
      <div className="row">
        <div className='col-12'>
          <section className={styles.graph}>
            <PortfolioGraphContainer />
          </section>

          <BuyingPower />

          <PopularLists />

          <PortfolioNews />
        </div>

        <div className="col-5">
          <PortfolioSidebar {...props} />
        </div>
      </div>

    </HeaderPage>
  );
};
export default Portfolio;
