import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4 text-center">À propos du projet</h2>
      <p>
        La plateforme <strong>Trouve ton artisan</strong> est une initiative de la région
        <strong> Auvergne-Rhône-Alpes</strong>, visant à valoriser les artisans locaux
        et faciliter la mise en relation avec les particuliers.
      </p>
      <p>
        Le site a été conçu dans une optique d'accessibilité (conforme aux normes
        <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer"> WCAG 2.1</a>),
        de simplicité d'utilisation et de compatibilité mobile-first.
      </p>
      <p>
        Grâce à cette plateforme, vous pouvez :
        <ul>
          <li>Découvrir les artisans par catégorie</li>
          <li>Consulter leur fiche détaillée</li>
          <li>Les contacter directement via un formulaire sécurisé</li>
        </ul>
      </p>
      <p>
        Ce projet s'intègre dans l'environnement numérique régional :
        <a href="https://www.auvergnerhonealpes.fr/contenus/ladministration-regionale" target="_blank" rel="noreferrer">
          https://www.auvergnerhonealpes.fr/contenus/ladministration-regionale
        </a>
      </p>
    </Container>
  );
};

export default About;
