import React, { Component } from 'react';

import HeaderPage from '../header/header_page';
import StockPriceGraphContainer from './graph/stock_price_graph_container';
import StockInfo from './about/stock_info';
import { Section, SectionHeader } from '../parts/section';
import SidebarContent from '../parts/sidebar_content';
import StockOrderForm from './sidebar/stock_order_form';
import StockSidebarButtons from './sidebar/StockSidebarButtons';
import StockHoldings from './stock_holdings';
import SelectListModal from '../lists/modal/SelectListModal';
import NotAvailable from '../errors/NotAvailable';
import styles from './stock.module.scss';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }

  fetchStockShowData() {
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
    const { holding, symbol, company, quote, description, apiErrors } = this.props;

    if (apiErrors.length) {
      return (
        <NotAvailable symbol={symbol}/>
      );
    }

    return (
      <HeaderPage>
        {/* <div className="lj-stock-associated-lists">Associated lists</div> */}

        <div className="row">
          <div className="col-12">
            <header className={styles.header}>
              <h1>{company && company['companyName']}</h1>
            </header>

            <div>
              <section className={styles.graphSection}>
                <StockPriceGraphContainer quote={quote} symbol={symbol} />
              </section>
              <div style={{ height: '40px' }}/>

              {holding && <StockHoldings holding={holding} quote={quote} />}

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

        <SelectListModal />
      </HeaderPage>
    );
  }
}
