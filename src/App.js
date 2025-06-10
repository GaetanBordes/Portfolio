// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./styles/variables.css";
import "./styles/Layout.css";
import "./App.css"; // votre CSS global ou celui contenant les styles de la nav
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Nav />

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
