import React from "react";
import Card from "../../components/Card";

function Exercices() {
  const projets = ["Video Game informations", "The notepad", "React Router"];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div>
      <h2>Exercices</h2>
      <div style={containerStyle}>
        {projets.map((titre) => (
          <Card key={titre} title={titre} />
        ))}
      </div>
    </div>
  );
}

export default Exercices;
