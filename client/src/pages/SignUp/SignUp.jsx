import React from "react"

import { Header, Footer, SignUp as BaseSignUp } from "../../components"
import "./signup.scss"

const SignUp = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container__signup">
        <BaseSignUp />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignUp
