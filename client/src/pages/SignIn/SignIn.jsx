import React from "react"

import { Header, Footer, About } from "../../components"
import { SignIn as BaseSignIn } from "../../containers"
import "./signin.scss"

const SignIn = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container__signin">
        <BaseSignIn />
      </div>
      <About />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignIn
