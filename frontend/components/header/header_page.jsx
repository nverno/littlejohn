import React, { Component } from 'react';

import Header from './header';
import LoadingHeader from '../loading/loading_header';
import styles from './header-page.module.scss';

export default class HeaderPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <LoadingHeader />
        <div className={styles.container}>
          <div className={styles.outer}>
            <div className={styles.body}>
              <div className={styles.main}>{this.props.children}</div>
            </div>
          </div>
          <Header />
        </div>
      </>
    );
  }
}
