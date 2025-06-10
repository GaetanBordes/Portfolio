// src/components/Nav/Nav.js
import "./Nav.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    const nextLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Groupe FR/EN + thème à gauche */}
        <div className="nav-toggle-group">
          <button
            className="nav-link"
            onClick={handleLanguageToggle}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>

          <label className="theme-toggle">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
              aria-label="Toggle Dark Mode"
            />
            <span className="slider" />
          </label>
        </div>

        {/* Logo centré (ou invisible si pas utile) */}
        <h1 className="nav-logo"></h1>

        {/* Menu de navigation à droite */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleLinkClick}
          >
            {t("navbar.home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleLinkClick}
          >
            {t("navbar.about")}
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleLinkClick}
          >
            {t("navbar.works")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleLinkClick}
          >
            {t("navbar.contact")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
