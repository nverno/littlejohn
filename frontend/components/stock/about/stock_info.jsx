import React, { Component } from 'react';
// import Spinner from '../../loading/spinner';
import PropagateLoader from 'react-spinners/PropagateLoader';

import StockDailyInfo from './stock_daily_info';
import StockDailyInfoCell from './stock_daily_info_cell';
import { SectionHeader, Section } from '../../parts/section';
import { ShowMoreButton, ReadMoreButton } from '../../parts/buttons';

import {
  companyDescription,
  companyOverview,
} from '../../../selectors/companies';

const StockInfoGrid = ({ company, overview, showMore, quote, ...props }) => {
  return (
    <div className="grid-4 lj-stock-info-grid">
      {overview &&
        overview.map((item, idx) => <StockDailyInfoCell key={idx} {...item} />)}
      {showMore && (
        <StockDailyInfo
          company={company}
          quote={quote}
          overview={overview}
          {...props}
        />
      )}
    </div>
  );
};

export default class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
      showMore: false,
      forcedUpdate: this.props.forcedUpdate,
    };
    this.setReadMore = this.setReadMore.bind(this);
    this.setShowMore = this.setShowMore.bind(this);
  }

  setReadMore() {
    this.setState({ readMore: !this.state.readMore });
  }
  setShowMore() {
    this.setState({ showMore: !this.state.showMore });
  }

  render() {
    if (!this.props.company) return <PropagateLoader />;

    const { readMore, showMore } = this.state;

    const { company, quote } = this.props;
    const description = companyDescription(company);
    const overview = companyOverview(company, quote);

    return (
      <Section>
        <SectionHeader title="About">
          <ShowMoreButton toggle={showMore} setToggle={this.setShowMore} />
        </SectionHeader>

        <div className="lj-stock-info-about-container">
          <h3 className="lj-stock-info-about">
            {description ? (
              <span className="lj-type7 lj-default-text">
                {description.first}
                {!readMore && '... '}
                {readMore && description.second}
              </span>
            ) : (
              <div style={{ width: '100%' }}>
                <PropagateLoader style={{ alignItems: 'center' }} />
              </div>
            )}

            <ReadMoreButton toggle={readMore} setToggle={this.setReadMore} />
          </h3>

          <StockInfoGrid
            company={company}
            overview={overview}
            showMore={showMore}
            {...this.props}
          />
        </div>
      </Section>
    );
  }
}
