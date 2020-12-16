import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import HeaderDropdown from './header_dropdown';
import AccountDropdownHeader from './account_dropdown_header';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
});

const AccountDropdown = ({ logout, ...props }) => {
  // const [open, setOpen] = React.useState(false);
  return (
    <HeaderDropdown {...props}>
      <div className="lj-acct-drop-container lj-theme-overlay">
        <div className="lj-acct-drop-outer">
          <AccountDropdownHeader />
        </div>
      </div>
    </HeaderDropdown>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(AccountDropdown));
