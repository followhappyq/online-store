import React from "react"
import { Form } from "antd"
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

import { FormField } from "../"
import "./signup.scss"

const SignUp = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props
  return (
    <div className="signup">
      <div className="signup__title">
        <h2>Sign Up</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <FormField
          className="signup__form"
          name="email"
          prefix={<MailOutlined />}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          placeholder="E-mail"
        />

        <FormField
          prefix={<UserOutlined />}
          name="name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          placeholder="Name"
        />
        <FormField
          name="password"
          prefix={<LockOutlined />}
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          placeholder="Password"
        />
        <FormField
          name="password_2"
          prefix={<LockOutlined />}
          handleChange={handleChange}
          type="password"
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          placeholder="Confirm Password"
        />
        <div
          className="signup__form__button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Sign Up
        </div>
      </Form>
    </div>
  )
}

export default SignUp
