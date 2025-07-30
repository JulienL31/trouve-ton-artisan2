import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Artisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [search, setSearch] = useState('');
  const [categorie, setCategorie] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [categories, setCategories] = useState([]);
  const [specialites, setSpecialites] = useState([]);
  const location = useLocation();

  // 🔍 Lecture du paramètre ?search dans l'URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    if (searchQuery) setSearch(searchQuery);
  }, [location.search]);

  // Récupération artisans
  useEffect(() => {
    fetch('http://localhost:5000/api/artisans')
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.error('Erreur artisans :', err));
  }, []);

  // Récupération catégories
  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Erreur catégories :', err));
  }, []);

  // Récupération spécialités
  useEffect(() => {
    fetch('http://localhost:5000/api/specialites')
      .then(res => res.json())
      .then(data => setSpecialites(data))
      .catch(err => console.error('Erreur spécialités :', err));
  }, []);

  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < note ? '#ffc107' : '#e4e5e9'} />
    ));
  };

  const filteredArtisans = artisans.filter((a) => {
    const matchNom = a.nom.toLowerCase().includes(search.toLowerCase());
    const matchCategorie = !categorie || a.categorie === categorie;
    const matchSpecialite = !specialite || a.specialite?.nom === specialite;
    return matchNom && matchCategorie && matchSpecialite;
  });

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Rechercher par nom"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
            <option value="">Toutes les catégories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.nom}>{c.nom}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={specialite} onChange={(e) => setSpecialite(e.target.value)}>
            <option value="">Toutes les spécialités</option>
            {specialites.map((s) => (
              <option key={s.id} value={s.nom}>{s.nom}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredArtisans.map((artisan) => (
          <Col key={artisan.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>
                  <Link to={`/artisans/${artisan.id}`} className="text-decoration-none">
                    {artisan.nom}
                  </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {artisan.specialite?.nom || 'Spécialité inconnue'} — {artisan.ville || 'Ville inconnue'}
                </Card.Subtitle>
                <div className="mb-2">{renderStars(Math.round(artisan.note))}</div>
                <Card.Text>{artisan.a_propos?.slice(0, 80)}...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Artisans;
