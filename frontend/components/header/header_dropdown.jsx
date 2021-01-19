import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  headerCloseAll,
  headerDropdownClose,
  headerDropdownOpen,
} from '../../actions/header_actions';
import styles from './header.module.scss';

const mapStateToProps = (state, _ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);

  return {
    loggedIn,
    isOpen: Boolean(state.ui.header.open),
    openId: state.ui.header.open,
  };
};

const mapDispatchToProps = (dispatch) => ({
  headerCloseAll: () => dispatch(headerCloseAll()),
  headerDropdownClose: (itemId) => dispatch(headerDropdownClose(itemId)),
  headerDropdownOpen: (itemId) => dispatch(headerDropdownOpen(itemId)),
});

class HeaderDropdown extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleOpen(itemId) {
    const { isOpen } = this.props;
    if (isOpen) {
      this.props.headerCloseAll();
      // this.props.headerDropdownClose(itemId);
    } else {
      // console.log('Opening: ', itemId);
      this.props.headerDropdownOpen(itemId);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOutsideClick(e) {
    if (
      this.props.isOpen &&
      this.wrapperRef &&
      !this.wrapperRef.current.contains(e.target)
    ) {
      this.props.headerDropdownClose();
    }
  }

  componentDidMount() {
    this.props.headerCloseAll();
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    const { item, isOpen, children } = this.props;
    // console.log('Item: ', item);
    return (
      <div ref={this.wrapperRef}>
        <a
          href="#"
          onClick={() => this.toggleOpen(item.title)}
          className={styles.link}
        >
          {item.title}
        </a>
        {isOpen && children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
