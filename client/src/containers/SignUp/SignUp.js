import { withFormik } from "formik"

import { SignUp } from "../../components"
import validateForm from "../../utils/validate"

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
})(SignUp)
