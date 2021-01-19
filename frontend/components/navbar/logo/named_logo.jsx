import React from 'react';
import Logo from './logo';
import styles from './logo.module.scss';

const NamedLogo = props => {
  return (
    <div className={styles.named}>
      {/* {FIXME: how to adjust svg size with params?} */}
      <span className={styles.text}>
        LittleJohn
      </span>
      <Logo {...props} />
    </div>
  );
};

export default NamedLogo;
