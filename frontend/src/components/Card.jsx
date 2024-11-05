import React from "react";
import "../css/Card.css";

const Card = ({ title, link, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
