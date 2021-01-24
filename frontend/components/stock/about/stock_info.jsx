import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../loading/Loader';
import StockDailyInfo from './stock_daily_info';
import StockDailyInfoCell from './stock_daily_info_cell';
import { SectionHeader, Section } from '../../parts/section';
import { ShowMoreButton, ReadMoreButton } from '../../parts/buttons';

import {
  companyDescription,
  companyOverview,
} from '../../../selectors/companies';
import { fetchCompanyInfo } from '../../../actions/company_actions';
import fonts from '../../../styles/font.module.scss';
import styles from './stock-info.module.scss';

const mapStateToProps = (state, ownProps) => ({
  description: state.entities.descriptions[ownProps.symbol],
});

const mapDispatchToProps = (dispatch, { symbol }) => ({
  fetchCompanyInfo: (descriptions) =>
    dispatch(fetchCompanyInfo({ descriptions, symbol })),
});

const StockInfoGrid = ({ company, overview, showMore, quote, ...props }) => {
  return (
    <div className={`grid-4 ${styles.grid}`}>
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
    if (!this.props.company) return <Loader />;

    const { readMore, showMore } = this.state;

    const { company, quote, description } = this.props;
    const formattedDescription = companyDescription(description);
    const overview = companyOverview(company, quote);

    return (
      <Section>
        <SectionHeader title="About">
          <ShowMoreButton toggle={showMore} setToggle={this.setShowMore} />
        </SectionHeader>

        <div className={styles.container}>
          <h3 className={styles.about}>
            {formattedDescription ? (
              <span className={`${fonts.type7} ${fonts.default}`}>
                {formattedDescription.first}
                {!readMore && '... '}
                {readMore && formattedDescription.second}
              </span>
            ) : (
              <div style={{ width: '100%' }}>
                <Loader />
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
