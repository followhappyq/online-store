import { withFormik } from "formik"

import { SignIn } from "../../components"
import validateForm from "../../utils/validate"

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  validate: (values) => {
    let errors = {}

    validateForm({ isAuth: true, values, errors })

    return errors
  },
  displayName: "SignIn",
})(SignIn)
