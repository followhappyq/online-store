import React from "react"

import "./cart.scss"

const Cart = ({ cartItems, totalAmount }) => {
  return (
    <div className="cart__container">
      <div className="cart__header">
        <div className="cart__header__title">Cart</div>
        <div className="cart__header__description">
          {cartItems.length} products. Total amount: {totalAmount}
        </div>
      </div>
      {cartItems.length > 0 ? (
        <ul className="cart__list">
          {cartItems.map((item) => (
            <li className="cart__item" key={item._id}>
              <div className="cart__product-name">{item.productName}</div>
              <img src={item.img} alt="img" />
              <button className="cart__product__remove">X</button>
            </li>
          ))}
        </ul>
      ) : (
        "Cart is empty"
      )}
    </div>
  )
}

export default Cart
