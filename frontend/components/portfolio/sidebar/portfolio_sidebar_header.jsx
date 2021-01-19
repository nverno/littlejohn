import React from 'react';
import styles from './psidebar.module.scss';

const PortfolioSidebarHeader = ({ title, ...props }) => {

  return (
    <div className={styles.headerContainer}>
      <div style={{margin: '0'}}>
        <header className={styles.header}>
          <span className={styles.headerText}>{title}</span>
          {props.children}
        </header>
      </div>
    </div>
  );
};
export default PortfolioSidebarHeader;
