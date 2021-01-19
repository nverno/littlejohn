import React from 'react';
import styles from './navbar.module.scss';
import NavbarContainer from './navbar_container';

const NavbarPage = props => {

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.pageOuter}>
          <div className={styles.pageBody}>
            {props.children}
          </div>
        </div>
      </div>        
      <NavbarContainer />
    </>
  );
};

export default NavbarPage;
