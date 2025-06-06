// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./App.css"; // votre CSS global ou celui contenant les styles de la nav
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Utilisation du composant Nav à la place de la nav “en dur” */}
      <Nav />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works/*" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Page non trouvée</h2>} />
      </Routes>
    </div>
  );
}

export default App;
