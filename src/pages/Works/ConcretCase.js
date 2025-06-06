import React from "react";
import Card from "../../components/Card";

function ConcretCase() {
  const projets = ["My grandparent bridge club website", "My friend bakery"];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div>
      <h2>Concret Case</h2>
      <div style={containerStyle}>
        {projets.map((titre) => (
          <Card key={titre} title={titre} />
        ))}
      </div>
    </div>
  );
}

export default ConcretCase;
