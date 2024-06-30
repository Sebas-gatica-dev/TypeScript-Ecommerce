import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import './styles.css';
import CustomSpinner from '../spinners/customSpinner';

const Promotions = () => {

  const {products, isLoading} = useFetch();

 const promotions = products.slice(2,5);

  if(isLoading) return <CustomSpinner />


  return (
    <Container className="promotions mt-4">
      <h2 className="text-center mb-4">Ofertas Especiales</h2>
      <Row>
        {promotions.map((promo) => (
          <Col key={promo.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={promo.image} />
              <Card.Body>
                <Card.Title>{promo.title}</Card.Title>
                <Card.Text>{promo.description}</Card.Text>
                <Card.Text>{promo.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Promotions;
