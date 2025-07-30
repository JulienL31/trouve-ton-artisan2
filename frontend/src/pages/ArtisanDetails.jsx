import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const ArtisanDetails = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/artisans/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Données artisan :", data);
        setArtisan(data);
      })
      .catch(err => console.error("Erreur récupération artisan :", err));
  }, [id]);

  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < note ? '#ffc107' : '#e4e5e9'} />
    ));
  };

  const getArtisanPhoto = () => {
    let result = '/src/assets/images/photo';

    if (artisan.photo)
      result += artisan.photo.toString();
    else
      result += ((artisan.id % 3) + 1).toString();

    result += '.jpg';
    
    return result;
  };


  if (!artisan) {
    return (
      <Container className="mt-5 text-center">
        <p>Chargement de l'artisan...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              src={getArtisanPhoto(artisan.photo)}
              alt={artisan.nom}
              className="img-fluid rounded-start"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="h3">{artisan.nom}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {artisan.specialite?.nom || 'Spécialité inconnue'} — {artisan.ville || 'Ville inconnue'}
              </Card.Subtitle>

              <div className="mb-2">
                {renderStars(Math.round(artisan.note))}
              </div>

              <Card.Text className="mb-2">
                <strong>Spécialité :</strong> {artisan.specialite?.nom || 'Non renseignée'}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Ville :</strong> {artisan.ville || 'Non renseignée'}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Email :</strong>{' '}
                {artisan.email ? (
                  <a href={`mailto:${artisan.email}`}>{artisan.email}</a>
                ) : (
                  'Non renseigné'
                )}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>À propos :</strong><br />
                {artisan.a_propos || 'Non renseigné.'}
              </Card.Text>
              {artisan.site_web ? (
                <Card.Text>
                  <strong>Site web :</strong>{' '}
                  <a href={artisan.site_web} target="_blank" rel="noreferrer">
                    {artisan.site_web}
                  </a>
                </Card.Text>
              ) : (
                <Card.Text><strong>Site web :</strong> Aucun</Card.Text>
              )}

              <Link to="/contact">
                <Button variant="primary" className="mt-3">
                  Contacter cet artisan
                </Button>
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ArtisanDetails;
