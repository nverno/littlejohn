import React from 'react';
import Image404 from './image_404.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const Unknown404 = () => {
  return (
    <Container fluid>
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
            <Link to="/">
              <Button
                color="success"
                className="btn btn-success"
                style={{ color: 'black' }}
              >
                Go Home
              </Button>
            </Link>
          </div>
          <div className="unknown-404-image">
            <Image404 />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Unknown404;
