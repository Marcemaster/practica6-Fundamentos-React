import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NotFoundBody = () => {
  return (
    <React.Fragment>
      <Container className="p-4">
          <div className="text-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist.
              But you can click the button below to go back to the homepage.
            </p>
            <Link to="/" className="btn btn-success btn-lg">
              Go Homepage
            </Link>
          </div>
      </Container>
    </React.Fragment>
  );
};
