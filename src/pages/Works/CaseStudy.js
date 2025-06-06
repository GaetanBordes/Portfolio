import React from "react";
import Card from "../../components/Card";

function CaseStudy() {
  const projets = [
    "Nike, the new website",
    "Paypal, how their data are stored",
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div>
      <h2>Case Study</h2>
      <div style={containerStyle}>
        {projets.map((titre) => (
          <Card key={titre} title={titre} />
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
