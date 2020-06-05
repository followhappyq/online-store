import React from "react"

import {
  Header,
  SideMenu,
  DiscountProducts,
  OurInstagram,
} from "../../components"
import "./home.scss"

const Home = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="main-container">
        <SideMenu></SideMenu>
        <DiscountProducts></DiscountProducts>
        <OurInstagram></OurInstagram>
      </div>
    </div>
  )
}

export default Home
