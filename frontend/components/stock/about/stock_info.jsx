import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { fetchCompanyInfo } from '../../../actions/company_actions';

const mapStateToProps = (state, ownProps) => ({
  description: state.entities.descriptions[ownProps.symbol],
});

const mapDispatchToProps = (dispatch, { symbol }) => ({
  fetchCompanyInfo: (descriptions) =>
    dispatch(fetchCompanyInfo({ descriptions, symbol })),
});

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

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
      showMore: false,
      // forcedUpdate: this.props.forcedUpdate,
    };
    this.setReadMore = this.setReadMore.bind(this);
    this.setShowMore = this.setShowMore.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompanyInfo(this.props.descriptions);
  }
  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol)
      this.props.fetchCompanyInfo(this.props.descriptions);
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

    const { company, quote, description } = this.props;
    const formattedDescription = companyDescription(description);
    const overview = companyOverview(company, quote);
    console.log('Description: ', formattedDescription);

    return (
      <Section>
        <SectionHeader title="About">
          <ShowMoreButton toggle={showMore} setToggle={this.setShowMore} />
        </SectionHeader>

        <div className="lj-stock-info-about-container">
          <h3 className="lj-stock-info-about">
            {formattedDescription ? (
              <span className="lj-type7 lj-default-text">
                {formattedDescription.first}
                {!readMore && '... '}
                {readMore && formattedDescription.second}
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

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo);
