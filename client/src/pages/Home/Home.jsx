import React from "react"

import {
  Header,
  SideMenu,
  DiscountProducts,
  OurInstagram,
  Footer,
  BestSellers,
} from "../../components"
import "./home.scss"

const Home = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="main-container">
        <div className="main-container__item">
          <SideMenu></SideMenu>
          <DiscountProducts></DiscountProducts>
          <OurInstagram></OurInstagram>
        </div>
        <div className="main-container__item">
          <BestSellers></BestSellers>
        </div>
      </div>
      <div className="footer-container">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
