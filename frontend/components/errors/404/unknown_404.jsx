import React from 'react';
import Image404 from './image_404.svg';
import { Link } from 'react-router-dom';

import NavbarPage from '../../navbar/navbar_page';
import navStyles from '../../navbar/main/main-navbar.module.scss';
import fonts from '../../../styles/font.module.scss';
import styles from './unknown.module.scss';

const Unknown404 = () => {
  return (
    <NavbarPage>

      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.content}>
            <div>
              <span className={styles.error}>
                404
                <br />
                Page not found
              </span>
            </div>
            <p>
              <span className={fonts.type11}>
                Not all those who wander are lost, but it seems you may have
                taken a wrong turn.
              </span>
            </p>

            <Link to="/" className={navStyles.signupButton}>
              Go Home
            </Link>

          </div>
          <div className={styles.image}>
            <Image404 />
          </div>
        </div>
      </div>

    </NavbarPage>
  );
};

export default Unknown404;
