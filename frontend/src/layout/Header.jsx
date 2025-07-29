import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/artisans?search=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  // Ne pas afficher le Header sur /admin
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
         <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo Trouve ton artisan"
            height="100"
            className="d-inline-block align-middle me-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/artisans">Artisans</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">À propos</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Rechercher un artisan"
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Recherche"
            />
            <Button variant="outline-primary" type="submit">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
