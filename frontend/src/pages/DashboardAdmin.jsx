import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Container } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const DashboardAdmin = () => {
  const [artisans, setArtisans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentArtisan, setCurrentArtisan] = useState(null);

  const [formData, setFormData] = useState({
    nom: '',
    specialite: '',
    ville: '',
    email: '',
    site_web: '',
    note: 0,
    a_propos: '',
    top: false,
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/artisans')
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.error('Erreur récupération artisans :', err));
  }, []);

  const handleShow = (artisan = null) => {
    setCurrentArtisan(artisan);
    setFormData(
      artisan || {
        nom: '',
        specialite: '',
        ville: '',
        email: '',
        site_web: '',
        note: 0,
        a_propos: '',
        top: false,
      }
    );
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = currentArtisan ? 'PUT' : 'POST';
    const url = currentArtisan
      ? `http://localhost:5000/api/artisans/${currentArtisan.id}`
      : 'http://localhost:5000/api/artisans';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(() => window.location.reload())
      .catch(err => console.error('Erreur soumission :', err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Supprimer cet artisan ?')) {
      fetch(`http://localhost:5000/api/artisans/${id}`, {
        method: 'DELETE',
      })
        .then(() => window.location.reload())
        .catch(err => console.error('Erreur suppression :', err));
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Dashboard administration</h2>

      <Button className="mb-3" variant="success" onClick={() => handleShow()}>
        <FaPlus /> Ajouter un artisan
      </Button>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Ville</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artisans.map((artisan) => (
            <tr key={artisan.id}>
              <td>{artisan.nom}</td>
              <td>{artisan.specialite?.nom || 'Inconnue'}</td>
              <td>{artisan.ville}</td>
              <td>{artisan.note}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShow(artisan)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(artisan.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentArtisan ? 'Modifier' : 'Ajouter'} un artisan</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Nom</Form.Label>
              <Form.Control name="nom" value={formData.nom} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Spécialité</Form.Label>
              <Form.Control name="specialite" value={formData.specialite} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Ville</Form.Label>
              <Form.Control name="ville" value={formData.ville} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Site web</Form.Label>
              <Form.Control name="site_web" value={formData.site_web} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} name="a_propos" value={formData.a_propos} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="note"
                value={formData.note}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Artisan du mois"
              name="top"
              checked={formData.top}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Annuler</Button>
            <Button variant="primary" type="submit">
              {currentArtisan ? 'Modifier' : 'Ajouter'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default DashboardAdmin;
