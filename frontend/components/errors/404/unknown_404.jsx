import React from 'react';
import Image404 from './image_404.svg';
import { Link } from 'react-router-dom';

import NavbarPage from '../../navbar/navbar_page';

const Unknown404 = () => {
  return (
    <NavbarPage>

      <div className="unknown-404-container">
        <div className="unknown-404-body">
          <div className="unknown-404-content">
            <div>
              <span className="unknown-404-error">
                404
                <br />
                Page not found
              </span>
            </div>
            <p>
              <span className="unknown-404-text">
                Not all those who wander are lost, but it seems you may have
                taken a wrong turn.
              </span>
            </p>

            <Link to="/" className="navbar-signup-button">
              Go Home
            </Link>

          </div>
          <div className="unknown-404-image">
            <Image404 />
          </div>
        </div>
      </div>

    </NavbarPage>
  );
};

export default Unknown404;
