import React from "react";
import "./About.css";

function About() {
  return (
    <div className="page-container">
      <h1 className="about-title" data-aos="fade-down">
        À propos de moi
      </h1>

      <p className="about-intro" data-aos="fade-up">
        Je suis un développeur web passionné par les interfaces élégantes, les
        performances et l'expérience utilisateur.
      </p>

      <section className="about-section" data-aos="fade-right">
        <h2>Mon parcours</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      <section className="about-section" data-aos="fade-left">
        <h2>Mes compétences</h2>
        <ul>
          <li>HTML, CSS, JavaScript, React</li>
          <li>Expérience avec Git, responsive design, accessibilité</li>
          <li>Design UX/UI, prototypage, optimisation web</li>
        </ul>
      </section>

      <section className="about-section" data-aos="fade-up">
        <h2>Mes objectifs</h2>
        <p>
          Je cherche à rejoindre une équipe dynamique ou travailler en freelance
          sur des projets motivants, notamment dans l’e-commerce ou les
          applications web innovantes.
        </p>
      </section>
    </div>
  );
}

export default About;
