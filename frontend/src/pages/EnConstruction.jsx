import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTools } from 'react-icons/fa';

const EnConstruction = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <FaTools size={80} className="mb-4 text-warning" />
          <h1 className="mb-3">Page en construction</h1>
          <p className="lead">
            Cette page n’est pas encore disponible. Nous travaillons activement pour vous la proposer très bientôt.
          </p>
          <p className="text-muted">Merci de votre patience 🙏</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EnConstruction;
