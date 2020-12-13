import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import StockPriceGraphContainer from './graph/stock_price_graph_container';
import StockInfoContainer from './about/stock_info_container';
import { Section, SectionHeader } from '../parts/section';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { symbol } = this.props;

    return (
      <HeaderPage>
        <div className="lj-stock-associated-lists">Associated lists</div>

        <div className="row">
          <div className="col-12">
            <header className="lj-stock-header">
              <h1>{symbol}</h1>
            </header>

            <div>
              <section className="lj-stock-graph-section">
                <StockPriceGraphContainer symbol={symbol} />
              </section>

              {/* XXX: only render this section if stock is owned */}
              {/* <Section> */}
              {/* </Section> */}
              {/* <section className="lj-stock-user-value"> */}
              {/* </section> */}

              <StockInfoContainer />

              <Section>
                <SectionHeader title="Related Lists" />
              </Section>
            </div>
          </div>

          <div className="col-5">Sidebar Content</div>
        </div>
      </HeaderPage>
    );
  }
}
