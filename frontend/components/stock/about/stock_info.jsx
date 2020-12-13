import React, { Component } from 'react';
import Spinner from '../../loading/spinner';

import StockDailyInfo from './stock_daily_info';
import StockDailyInfoCell from './stock_daily_info_cell';
import { SectionHeader, Section } from '../../parts/section';
import { ShowMoreButton, ReadMoreButton } from '../../parts/buttons';

const StockInfoGrid = ({ company, overview, showMore }) => {
  return (
    <div className="grid-4 lj-stock-info-grid">
      {overview.map((item, idx) => (
        <StockDailyInfoCell key={idx} {...item} />
      ))}
      {showMore && <StockDailyInfo company={company} overview={overview} />}
    </div>
  );
};

export default class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
      showMore: false,
    };
    this.setReadMore = this.setReadMore.bind(this);
    this.setShowMore = this.setShowMore.bind(this);
  }

  // componentDidMount() {
  //   if (!this.props.company) {
  //     this.props.fetchCompanyInfo();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.symbol !== prevProps.symbol) this.props.fetchCompanyInfo();
  // }

  setReadMore() {
    this.setState({ readMore: !this.state.readMore });
  }
  setShowMore() {
    this.setState({ showMore: !this.state.showMore });
  }

  render() {
    if (!this.props.company) return <Spinner />;

    const { readMore, showMore } = this.state;
    const { company, description, overview } = this.props;

    return (
      <Section>
        <SectionHeader title="About">
          <ShowMoreButton toggle={showMore} setToggle={this.setShowMore} />
        </SectionHeader>

        <div className="lj-stock-info-about-container">
          <h3 className="lj-stock-info-about">
            {description ? (
              <span className="lj-type7 lj-primary">
                {description.first}
                {!readMore && '... '}
                {readMore && description.second}
              </span>
            ) : (
              <Spinner />
            )}

            <ReadMoreButton toggle={readMore} setToggle={this.setReadMore} />
          </h3>

          <StockInfoGrid
            company={company}
            overview={overview}
            showMore={showMore}
          />
        </div>
      </Section>
    );
  }
}
