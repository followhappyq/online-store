import React from "react"

import { Header, Footer, About, Profile as BaseProfile } from "../../components"

import "./profile.scss"

const Profile = () => {
  const info = {
    name: "ProfileName",
    email: "profile@profile.com",
    number: "Profile phone number",
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
