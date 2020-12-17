import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PortfolioSidebarHeader from './portfolio_sidebar_header';
import { getFollowedLists } from '../../../selectors/lists';

const mapStateToProps = (state, _ownProps) => {
  return {
    following: getFollowedLists(state),
    userId: state.session.currentUser.id,
    state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // clearListErrors: () => dispatch(clearListErrors()),
});

const FollowCell = ({ list }) => {
  return (
    <div className="follow-cell-container">
      <div className="follow-cell-outer">
        <button type="button" disabled className="follow-cell-button">
          <div className="follow-cell-inner">
            <Link to={`/lists/${list.id}`} className="follow-cell-link">
              <div className="follow-cell-icon-container">
                <div className="follow-cell-icon-outer">
                  <div className="follow-cell-icon-inner">
                    <img
                      className="follow-cell-image"
                      src={window.followIconURL}
                    ></img>
                  </div>
                </div>

                <div className="follow-cell-title">
                  <span className="lj-type1">{list.name}</span>
                </div>
              </div>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
};

const PortfolioFollowing = ({ following, userId, ...props }) => {
  console.log('Following lists: ', following);

  return (
    <>
      <PortfolioSidebarHeader title="Following" />
      {following.map((list, idx) => (
        <FollowCell key={idx} list={list} />
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioFollowing);
