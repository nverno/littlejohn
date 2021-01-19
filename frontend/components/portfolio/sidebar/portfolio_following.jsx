import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PortfolioSidebarHeader from './portfolio_sidebar_header';
import { getFollowedLists } from '../../../selectors/lists';
import styles from './psidebar.module.scss';

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
    <div className={styles.followContainer}>
      <div className={styles.followOuter}>
        <button type="button" disabled className={styles.followButton}>
          <div className={styles.followInner}>
            <Link to={`/lists/${list.id}`} className={styles.followLink}>
              <div className={styles.followIcon}>
                <div className={styles.followIconOuter}>
                  <div className={styles.followIconInner}>
                    <img
                      className={styles.followImage}
                      src={window.followIconURL}
                    ></img>
                  </div>
                </div>

                <div className={styles.followTitle}>
                  <span>{list.name}</span>
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
  // console.log('Following lists: ', following);
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
