import React from "react"

import { Footer, About } from "../../components"
import { Header, SignIn as BaseSignIn } from "../../containers"
import "./signin.scss"

const SignIn = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container__signin">
        <BaseSignIn />
        <About />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignIn
