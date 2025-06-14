import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Section Hero */}
      <section className="hero" data-aos="fade-up">
        <h1 className="hero-title">Gaëtan Bordes</h1>
        <p className="hero-subtitle">{t("home.subtitle")}</p>
        <Link to="/works" className="hero-cta" data-aos="zoom-in">
          {t("home.cta")}
        </Link>
      </section>

      {/* Section À propos */}
      <section className="about-summary" data-aos="fade-right">
        <div className="about-content">
          <img
            src="/images/logo512.png"
            alt="Photo de Gaëtan Bordes"
            className="about-avatar"
          />
          <div className="about-text" data-aos="fade-left">
            <h2>{t("home.aboutTitle")}</h2>
            <p>{t("home.aboutText")}</p>
            <Link to="/about" className="button-link">
              {t("home.aboutLink")}
            </Link>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="projects-preview" data-aos="fade-up">
        <h2 className="projects-title">{t("home.projectsTitle")}</h2>
        <div className="projects-grid">
          <div className="project-card" data-aos="zoom-in-up">
            <div className="project-media">
              <img
                src="/images/video-game-thumb.jpg"
                alt="Video Game informations"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">Video Game informations</h3>
              <p className="project-type">{t("home.projectType.exercise")}</p>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="project-media">
              <img
                src="/images/nike-thumb.jpg"
                alt="Nike, the new website"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">Nike, the new website</h3>
              <p className="project-type">{t("home.projectType.caseStudy")}</p>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="project-media">
              <img
                src="/images/bakery-thumb.jpg"
                alt="My friend bakery"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">My friend bakery</h3>
              <p className="project-type">{t("home.projectType.real")}</p>
            </div>
          </div>
        </div>

        <div className="projects-more" data-aos="fade-up">
          <Link to="/works" className="button-cta">
            {t("home.projectsMore")}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
