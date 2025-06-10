import React from "react";
import "./Contact.css"; // Crée ce fichier pour les styles si besoin

function Contact() {
  return (
    <div className="page-container">
      <h1 data-aos="fade-down">Contact</h1>

      <p data-aos="fade-up">
        Pour toute question ou opportunité, vous pouvez m’écrire à :{" "}
        <a href="mailto:bordes.gaetan33@gmail.com" className="contact-link">
          bordes.gaetan33@gmail.com
        </a>
      </p>

      <div className="contact-buttons" data-aos="zoom-in-up">
        <a
          href="https://www.linkedin.com/in/gaetan-bordes-648484b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/GaetanBordes"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
