import React from 'react'
import  './Card.scss';

export default function Card() {
  return (
     <div className="product-card">
      <img className="product-card__image" src={"https://i.ytimg.com/vi/tW0H5ReNBzo/maxresdefault.jpg"} alt={""} />
      <div className="product-card__info">
        <h2 className="product-card__title">{"kedbej"}</h2>
        <p className="product-card__price">${2121515105}</p>
        <button className="product-card__button">Add to Cart</button>
      </div>
    </div>
  )
}
