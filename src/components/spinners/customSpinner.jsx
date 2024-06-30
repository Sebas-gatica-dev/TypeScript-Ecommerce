import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function CustomSpinner() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default CustomSpinner;
