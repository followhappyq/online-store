import { combineReducers } from "redux"

const reducers = ["instagram", "products", "user", "cart", "filters"]

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)
