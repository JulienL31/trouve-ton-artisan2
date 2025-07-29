import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col, Card } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzpjjyw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div style={{
      background: "linear-gradient(to right, #f1f8fc, #ffffff)",
      minHeight: "100vh",
      padding: "50px 0"
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="text-center mb-4">
                  <FaEnvelopeOpenText size={48} color="#0074c7" />
                  <h2 className="mt-2 fw-bold">Contactez-nous</h2>
                  <p className="text-muted">Une question ? Un besoin ? Écrivez-nous !</p>
                </div>

                {status === "success" && (
                  <Alert variant="success">Votre message a bien été envoyé.</Alert>
                )}
                {status === "error" && (
                  <Alert variant="danger">
                    Une erreur s'est produite. Veuillez réessayer plus tard.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Votre nom" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="votre@email.com" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      required
                      placeholder="Votre message"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Envoyer
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
 