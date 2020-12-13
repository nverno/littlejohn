import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import StockPriceGraphContainer from './graph/stock_price_graph_container';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { symbol } = this.props;

    return (
      <HeaderPage>
        <div className="lj-stock-associated-lists" >
          Associated lists
        </div>
        
        <div className="row">
          <div className="col-12">
            <header className="lj-stock-header">
              <h1>{symbol}</h1>
            </header>

            <div>
              <section className="lj-stock-graph-section">
                <StockPriceGraphContainer />
              </section>

              <section className="lj-stock-user-value">
              </section>
            </div>
          </div>

          <div className="col-5">Sidebar Content</div>
        </div>
      </HeaderPage>
    );
  }
}
