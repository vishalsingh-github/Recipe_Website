import React from "react";
import "./Card.css";

function Card({item, index, link}) {
  return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(item.recipe.image) ? (
    <div className="card">
      <a href={link} className="card__a" target="_blank">
        <img
          id={index}
          className="card__img"
          src={item.recipe.image}
          alt="img"
        />
        <p className="card__name">{item.recipe.label}</p>
      </a>
    </div>
  ) : null;
}

export default Card;
