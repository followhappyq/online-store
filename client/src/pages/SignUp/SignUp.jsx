import React from "react"

import { Footer, About } from "../../components"
import { Header, SignUp as BaseSignUp } from "../../containers"
import "./signup.scss"

const SignUp = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container__signup">
        <BaseSignUp />
        <About />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignUp
