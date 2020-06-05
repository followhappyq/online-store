import React from "react"
import { Input } from "antd"

import "./signup.scss"

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__title">
        <h2>Sign Up</h2>
      </div>
      <div className="signup__form">
        <label htmlFor="" className="signup__form__label">
          E-mail
        </label>
        <Input placeholder="E-mail" className="signup__form__item"></Input>
        <label htmlFor="" className="signup__form__label">
          Name
        </label>
        <Input placeholder="Name" className="signup__form__item"></Input>
        <label htmlFor="" className="signup__form__label">
          Passowrd
        </label>
        <Input placeholder="Password" className="signup__form__item"></Input>
        <label htmlFor="" className="signup__form__label">
          Repeat password
        </label>
        <Input
          placeholder="Repeat password"
          className="signup__form__item"
        ></Input>
        <div className="signup__form__button">
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
