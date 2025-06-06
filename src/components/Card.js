import React from "react";

function Card({ title }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "0.5rem",
    width: "200px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
