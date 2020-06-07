import { withFormik } from "formik"

import { SignUp } from "../../components"
import validateForm from "../../utils/validate"

import { userActions } from "../../redux/actions"
import store from "../../redux/store"

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    name: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {}
    if (!values.name) {
      errors.name = "Required"
    }
    validateForm({ isAuth: false, values, errors })

    return errors
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserRegister(values))
      .then(({ status }) => {
        if (status === "success") {
          props.history.push("/")
        }
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  },
  displayName: "SignUp",
})(SignUp)
