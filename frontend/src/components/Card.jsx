import React from "react";
import "../css/Card.css";
const Card = ({ title, value }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default Card;
