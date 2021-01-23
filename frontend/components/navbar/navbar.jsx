import React from 'react';

// import HeaderContainer from '../header/header_container';
// import UserNavbar from './user_navbar';
import MainNavbar from './main/main_navbar';
import styles from './navbar.module.scss';

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
    const { pathname } = this.props.location;
    console.log("pathname: ", pathname);
    let navClass = this.props.isOpen ? styles.mainExpanded : styles.main;
    navClass += (pathname === '/welcome'
                 ? navClass += ` ${styles.welcome}`
                 : navClass += ` ${styles.default}`);

    return (
      <div ref={this.wrapperRef}>
        <div className={styles.container}>
          <nav role="navigation" className={navClass}>
            <MainNavbar {...this.props} />
          </nav>
        </div>
      </div>
    );
  }
}
