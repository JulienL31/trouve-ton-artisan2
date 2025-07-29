import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/artisans/mois')
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.error("Erreur récupération artisans :", err));
  }, []);

  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < note ? '#ffc107' : '#e4e5e9'} />
    ));
  };

  return (
    <Container className="mt-5">
      {/* Étapes */}
      <section className="text-center mb-5">
        <h2 className="mb-4 fw-bold">Comment trouver mon artisan ?</h2>
        <Row className="gy-4">
          {[
            { step: "1", text: "Choisir la catégorie d’artisanat dans le menu." },
            { step: "2", text: "Choisir un artisan." },
            { step: "3", text: "Le contacter via le formulaire de contact." },
            { step: "4", text: "Une réponse sera apportée sous 48h." },
          ].map(({ step, text }, i) => (
            <Col key={i} md={3} sm={6}>
              <div className="p-3 border rounded shadow-sm h-100 bg-light">
                <div
                  className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-2"
                  style={{ width: 40, height: 40, fontWeight: 'bold' }}
                >
                  {step}
                </div>
                <p className="mb-0">{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>


      <hr />

      {/* Artisans du mois */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Les artisans du mois</h2>
        <Row className="g-4">
          {artisans.length > 0 ? (
            artisans.map((artisan) => (
              <Col md={4} key={artisan.id}>
                <Link
                  to={`/artisan/${artisan.id}`}
                  className="text-decoration-none text-dark"
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={artisan.photo || "/src/assets/images/photo1.jpg"}
                        alt={artisan.nom}
                      />
                      <Card.Title>{artisan.nom}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{artisan.specialite}</Card.Subtitle>
                      <div className="mb-2">{renderStars(Math.round(artisan.note))}</div>
                      <Card.Text><strong>Ville :</strong> {artisan.ville}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center">Aucun artisan sélectionné ce mois-ci.</p>
            </Col>
          )}
        </Row>
      </section>
    </Container>
  );
};

export default Home;
