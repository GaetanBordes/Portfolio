import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./Works.css";

import Exercices from "./Exercices";
import CaseStudy from "./CaseStudy";
import ConcretCase from "./ConcretCase";

function Works() {
  const activeSubStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "var(--color-accent)",
  };

  return (
    <div className="works-container">
      <h1 className="works-title" data-aos="fade-up">
        Mes Réalisations
      </h1>

      <p className="works-subtitle" data-aos="fade-up" data-aos-delay="100">
        Voici deux projets concrets réalisés pendant ma formation. Cliquez sur
        chaque vignette pour voir le code source.
      </p>

      {/* Grille des projets réels */}
      <div className="works-grid">
        <div className="project-card" data-aos="zoom-in-up">
          <img
            src="/images/chaton-thumb.jpg"
            alt="Aperçu Chaton Project"
            className="project-img"
          />
          <a
            href="https://github.com/Jade-m22/Chaton_Project"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chaton Project (HTML/CSS/JS)
          </a>
        </div>

        <div
          className="project-card"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <img
            src="/images/odynest-thumb.jpg"
            alt="Aperçu Odynest Project"
            className="project-img"
          />
          <a
            href="https://github.com/Jade-m22/Odynest_Project"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odynest Project (React/JS)
          </a>
        </div>
      </div>

      {/* Navigation vers les catégories */}
      <nav className="works-nav" data-aos="fade-in" data-aos-delay="200">
        <NavLink
          to="exercices"
          className="works-link"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Exercices
        </NavLink>
        <NavLink
          to="case-study"
          className="works-link"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Études de cas
        </NavLink>
        <NavLink
          to="concret-case"
          className="works-link"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Projets concrets
        </NavLink>
      </nav>

      {/* Contenu dynamique */}
      <div className="works-content" data-aos="fade-up" data-aos-delay="300">
        <Routes>
          <Route index element={<p>Sélectionnez une catégorie ci-dessus.</p>} />
          <Route path="exercices" element={<Exercices />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="concret-case" element={<ConcretCase />} />
          <Route path="*" element={<p>Catégorie non trouvée.</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default Works;
