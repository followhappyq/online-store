import React from "react"

import { Footer, About, Profile as BaseProfile } from "../../components"
import { Header } from "../../containers"

import "./profile.scss"

const Profile = () => {
  const info = {
    name: "ProfileName",
    email: "profile@profile.com",
    number: "Profile phone number",
    city: "Profile city",
    adress: "Profile address",
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="main-container__profile">
          <BaseProfile info={info} />
          <About />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Profile
