import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works/Works";

function App() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div>
      {/* Barre de navigation principale */}
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        {" | "}
        <NavLink
          to="/works"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Works
        </NavLink>
        {" | "}
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </nav>

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Route pour /works et toutes ses sous-routes */}
        <Route path="/works/*" element={<Works />} />
        {/* Optionnel : page 404 si besoin */}
        <Route path="*" element={<h2>Page non trouvée</h2>} />
      </Routes>
    </div>
  );
}

export default App;
