import React from "react"

import { Header, Footer } from "../../components"
import { ProductsSideMenu, ProductsList } from "../../containers"
import "./products.scss"

const Products = () => {
  const title = "Computers"
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="main-container__products">
          <div className="main-container__products__title">
            <p>{title}</p>
          </div>
          <div className="main-container__products__content">
            <ProductsSideMenu />
            <ProductsList title={title} />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Products
