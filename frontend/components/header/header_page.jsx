import React from 'react';

import Header from './header';
import LoadingHeader from '../loading/loading_header';
import DepositModal from '../account/deposit/DepositModal';
import styles from './header-page.module.scss';

const HeaderPage = ({ ...props }) => {
  return (
    <>
      <LoadingHeader />
      <div className={styles.container}>
        <div className={styles.outer}>
          <div className={styles.body}>
            <div className={styles.main}>{props.children}</div>
          </div>
        </div>
        <Header />
        <DepositModal />
      </div>
    </>
  );
};
export default HeaderPage;
