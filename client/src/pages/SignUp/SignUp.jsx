import React from "react"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components"
import { SignUp as BaseSignUp } from "../../containers"
import "./signup.scss"

const SignUp = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container__signup">
        <BaseSignUp />
        <Link className="auth__register-link" to="/signin">
          Sign In
        </Link>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignUp
