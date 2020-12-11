import React from 'react';

import HeaderContainer from '../header/header_container';
import UserNavbar from './user_navbar';
import MainNavbar from './main_navbar';

// FIXME: could add test if match.params have changed, in which
// case all dropdowns should be closed
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  // Hide open dropdowns when clicked elsewhere on the page
  handleOutsideClick(e) {
    if (
      this.props.isOpen &&
      this.wrapperRef &&
      !this.wrapperRef.current.contains(e.target)
    ) {
      // Tell the parent navbar that none of the items are open
      this.props.navbarDropdownClose();
    }
  }

  componentDidMount() {
    this.props.navbarCloseAll();
    // Start listener for clicks outside of any open dropdowns
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    const { loggedIn, welcome } = this.props;
    if (!welcome && loggedIn) return <HeaderContainer />;
    
    let navClass = !welcome && loggedIn ? 'navbar-user' : 'navbar-main';
    if (this.props.isOpen) {
      navClass += ' navbar-dropdown-expanded';
    }

    return (
      <div ref={this.wrapperRef}>
        <div className="navbar-container">
          <nav role="navigation" className={navClass}>
            {!welcome && loggedIn ? (
              <UserNavbar {...this.props} />
            ) : (
              <MainNavbar {...this.props} />
            )}
          </nav>
        </div>
      </div>
    );
  }
}
