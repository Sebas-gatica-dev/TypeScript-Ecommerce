import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './styles.css';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <Container>
        <h1>Bienvenido a Nuestro Ecommerce</h1>
        <p>Encuentra los mejores productos a los mejores precios.</p>
      </Container>
    </div>
  );
};

export default HomeBanner;
