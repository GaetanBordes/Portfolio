// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importe le CSS dédié à la Home

function Home() {
  return (
    <div className="home-container">
      {/* Section Hero */}
      <section className="hero">
        <h1 className="hero-title">Gaëtan Bordes</h1>
        <p className="hero-subtitle">Développeur Web & UX Designer</p>
        <Link to="/works" className="hero-cta">
          Voir mes projets
        </Link>
      </section>

      {/* Section À propos (résumé) */}
      <section className="about-summary">
        <div className="about-content">
          {/* Remplace 'avatar.jpg' par le nom de ton image dans public/images */}
          <img
            src="/images/logo512.png"
            alt="Photo de Gaëtan Bordes"
            className="about-avatar"
          />
          <div className="about-text">
            <h2>À propos</h2>
            <p>
              Passionné par la création d’interfaces épurées et performantes, je
              transforme chaque maquette en une expérience utilisateur fluide.
              Issu d’une formation en développement web, j’ai déjà réalisé
              plusieurs projets concrets pour des associations et des amis.
            </p>
            <Link to="/about" className="button-link">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section Aperçu des projets */}
      <section className="projects-preview">
        <h2 className="projects-title">Projets sélectionnés</h2>
        <div className="projects-grid">
          {/* Chaque card affiche une image + titre + type de projet */}
          <div className="project-card">
            <div className="project-media">
              <img
                src="/images/video-game-thumb.jpg"
                alt="Video Game informations"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">Video Game informations</h3>
              <p className="project-type">Exercice React</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-media">
              <img
                src="/images/nike-thumb.jpg"
                alt="Nike, the new website"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">Nike, the new website</h3>
              <p className="project-type">Case Study</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-media">
              <img
                src="/images/bakery-thumb.jpg"
                alt="My friend bakery"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">My friend bakery</h3>
              <p className="project-type">Projet concret</p>
            </div>
          </div>
        </div>
        <div className="projects-more">
          <Link to="/works" className="button-cta">
            Voir tous mes travaux
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
