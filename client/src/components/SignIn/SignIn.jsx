import React from "react"
import { Link } from "react-router-dom"

import { Form, Input } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"

import validateField from "../../utils/helpers/validateField"
import "./signin.scss"

const SignIn = (props) => {
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
        <h2>Sign In</h2>
      </div>
      <Form onSubmit={handleSubmit} className="signin">
        <Form.Item
          validateStatus={validateField("email", touched, errors)}
          help={!touched.email ? " " : errors.email}
          hasFeedback
        >
          <Input
            id="email"
            placeholder="E-mail"
            prefix={<MailOutlined />}
            size="large"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField("password", touched, errors)}
          hasFeedback
          onChange={handleChange}
          onBlur={handleBlur}
          help={!touched.password ? " " : errors.password}
        >
          <Input.Password
            id="password"
            type="password"
            placeholder="Password"
            prefix={<LockOutlined />}
            size="large"
            value={values.password}
          />
        </Form.Item>
        <Form.Item>
          <div
            className="signin__form__button"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            Sign In
          </div>
        </Form.Item>

        <Link className="auth__register-link" to="/signup">
          Create an account
        </Link>
      </Form>
    </div>
  )
}

export default SignIn
