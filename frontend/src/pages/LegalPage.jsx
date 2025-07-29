import React from "react";
import { Container } from "react-bootstrap";

const LegalPage = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Mentions Légales</h2>
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, il est porté à la connaissance des utilisateurs et visiteurs du site Trouve ton artisan les présentes mentions légales.
      </p>
      <h4 className="mt-4">1. Informations sur l'éditeur du site</h4>
      <p>
        Nom du projet : Trouve ton artisan<br />
        Adresse : 11 avenue des Champs, 69000 Lyon<br />
        Email : contact@trouvetonartisan.fr
      </p>
      <h4 className="mt-4">2. Hébergement du site</h4>
      <p>
        Le site est hébergé par : OVHcloud<br />
        Siège social : 2 rue Kellermann, 59100 Roubaix, France<br />
        Téléphone : 1007
      </p>
      <h4 className="mt-4">3. Propriété intellectuelle</h4>
      <p>
        L'ensemble du contenu du site Trouve ton artisan est protégé par les lois en vigueur sur la propriété intellectuelle.
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable de l'équipe projet.
      </p>
      <h4 className="mt-4">4. Accessibilité</h4>
      <p>
        Ce site a été conçu pour respecter les normes d'accessibilité WCAG 2.1 niveau AA. Nous nous efforçons d'améliorer en permanence l'expérience utilisateur pour tous.
      </p>
      <h4 className="mt-4">5. Données personnelles</h4>
      <p>
        Aucune donnée personnelle n'est stockée sur le site. Les données du formulaire de contact sont envoyées via un service externe sécurisé (Formspree) et ne sont pas conservées sur le serveur.
      </p>
      <h4 className="mt-4">6. Cookies</h4>
      <p>
        Ce site n'utilise aucun cookie de suivi ou de statistique.
      </p>
    </Container>
  );
};

export default LegalPage;
