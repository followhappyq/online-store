import { axios } from "../../core/index"

export default {
  signIn: (postData) => axios.post("/signin", postData),
  signUp: (postData) => axios.post("/signup", postData),
  getMe: () => axios.get("/me"),
  findUsers: (query) => axios.get("/user/find?query=" + query),
}
