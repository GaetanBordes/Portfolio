// src/components/Nav/Nav.js
import "./Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Lorsque l’on clique sur un lien, on referme systématiquement le menu (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* 1. Logo / titre à gauche */}
      <div className="nav-left">
        <h1 className="nav-logo">Gaëtan Bordes</h1>
      </div>

      {/* 2. Bouton “hamburger” (affiché uniquement en mobile) */}
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Ouvrir/fermer le menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* 3. Liens de navigation */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
