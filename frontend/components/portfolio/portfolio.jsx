import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';

import HeaderPage from '../header/header_page';
// import SampleGraph from './portfolio_sample.png';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderPage>
        <div className="row">
          <div className="col-12 portfolio-col-left">
            <section className="portfolio-graph-section">
              {/* <img src={SampleGraph} /> */}
            </section>

            <div className="portfolio-buying-power">Buying Power</div>

            <section className="portfolio-news-section">
              Popular Lists & News
            </section>
          </div>

          <div className="col-5 portfolio-col-right">Sidebar Content</div>
        </div>
      </HeaderPage>
    );
  }
}
