import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import StockPriceGraphContainer from './graph/stock_price_graph_container';
import StockInfo from './about/stock_info';
import { Section, SectionHeader } from '../parts/section';
import SidebarContent from '../parts/sidebar_content';
import StockOrderForm from './stock_order_form';
import StockSidebarButtons from './stock_sidebar_buttons';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }

  fetchStockShowData() {
    console.log('State: ', this.props.state);
    this.props.fetchStockShowData({
      symbol: this.props.symbol,
      // quotes: {}, prices: {}, companies: {},
      ...this.props.entities,
    });
  }

  componentDidMount() {
    this.fetchStockShowData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) this.fetchStockShowData();
  }

  render() {
    const { symbol, company, quote, description } = this.props;

    return (
      <HeaderPage>
        {/* <div className="lj-stock-associated-lists">Associated lists</div> */}

        <div className="row">
          <div className="col-12">
            <header className="lj-stock-header">
              <h1>{company && company['companyName']}</h1>
            </header>

            <div>
              <section className="lj-stock-graph-section">
                <StockPriceGraphContainer quote={quote} symbol={symbol} />
              </section>

              {/* XXX: only render this section if stock is owned */}
              {/* <Section> */}
              {/* </Section> */}
              {/* <section className="lj-stock-user-value"> */}
              {/* </section> */}

              <StockInfo
                company={company}
                quote={quote}
                symbol={symbol}
                description={description}
                forcedUpdate={this.props.forcedUpdate}
              />

              <Section>
                <SectionHeader title="Related Lists" />
              </Section>
            </div>
          </div>

          <div className="col-5">
            <SidebarContent footer={<StockSidebarButtons symbol={symbol} />}>
              {quote && (
                <StockOrderForm symbol={symbol} price={quote.latestPrice} />
              )}
            </SidebarContent>
          </div>
        </div>
      </HeaderPage>
    );
  }
}
