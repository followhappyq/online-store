import React from "react"

import "./productcard.scss"

const ProductCard = ({ item, onProductAdded }) => {
  return (
    <li className="product-card">
      <div className="product-card__title">{item.productName}</div>
      <div className="product-card__container">
        <div className="product-card__container__image">
          <img src={item.img} alt="img" />
        </div>
        <div className="product-card__container__description">{`${item.type}, ${item.processor}, ${item.memoryType},${item.hdd}, ${item.graphicCard}`}</div>
        <div className="product-card__container__price">
          Price: ${item.price}
        </div>
        <div className="product-card__cart" onClick={onProductAdded}>
          +
        </div>
      </div>
    </li>
  )
}

export default ProductCard
