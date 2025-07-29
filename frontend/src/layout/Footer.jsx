import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5 border-top">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Pages légales</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/legal">Mentions légales</Nav.Link>
              <Nav.Link as={Link} to="/donnees-personnelles">Données personnelles</Nav.Link>
              <Nav.Link as={Link} to="/accessibilite">Accessibilité</Nav.Link>
              <Nav.Link as={Link} to="/cookies">Cookies</Nav.Link>
            </Nav>
          </Col>
          <Col md={6}>
            <h5>Contact – Antenne de Lyon</h5>
            <address>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <abbr title="Téléphone">Tél :</abbr> +33 (0)4 26 73 40 00
            </address>
          </Col>
        </Row>
        <hr />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Région Auvergne-Rhône-Alpes – Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
