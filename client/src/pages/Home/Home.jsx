import React from "react"

import {
  Header,
  SideMenu,
  DiscountProducts,
  Footer,
  BestSellers,
  About,
} from "../../components"
import { OurInstagram } from "../../containers"
import "./home.scss"

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="main-container__item">
          <SideMenu />
          <DiscountProducts />
          <OurInstagram />
        </div>
        <div className="main-container__item">
          <BestSellers />
          <About />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Home
