import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "../Works/Works.css";

import Exercices from "./Exercices";
import CaseStudy from "./CaseStudy";
import ConcretCase from "./ConcretCase";

function Works() {
  const activeSubStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div className="page-container">
      <h1>Works</h1>
      <p>Welcome on the works page. Please, select a category :</p>

      {/* Sous-navigation */}
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink
          to="exercices"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Exercices
        </NavLink>
        {" | "}
        <NavLink
          to="case-study"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Case Study
        </NavLink>
        {" | "}
        <NavLink
          to="concret-case"
          style={({ isActive }) => (isActive ? activeSubStyle : undefined)}
        >
          Concret Case
        </NavLink>
      </nav>

      {/* Définition des sous-routes */}
      <Routes>
        <Route index element={<p>Choisissez une catégorie ci-dessus.</p>} />
        <Route path="exercices" element={<Exercices />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="concret-case" element={<ConcretCase />} />
        <Route path="*" element={<p>Catégorie non trouvée.</p>} />
      </Routes>
    </div>
  );
}

export default Works;
