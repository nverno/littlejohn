import React from 'react';
import Image404 from './image_404.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Unknown404 = () => {
  return (
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
              Not all those who wander are lost, but it seems you may
              have taken a wrong turn.
            </span>
          </p>
          <Link to="/">
            <Button color='success' className="btn btn-success">
              Go Home
            </Button>
          </Link>
        </div>
        <div className="unknown-404-image">
          <Image404 />
        </div>
      </div>
    </div>
  );
};

export default Unknown404;
