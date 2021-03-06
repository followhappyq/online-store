import React from "react"

import { Footer, About } from "../../components"
import { Header, Cart as BaseCart } from "../../containers"
import "./cart.scss"

const Cart = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="main-container__item">
          <BaseCart />
        </div>
        <div className="main-container__item">
          <About />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Cart
