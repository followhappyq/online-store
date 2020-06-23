import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart"

const initialState = {
  items: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, payload],
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== payload),
      }

    default:
      return state
  }
}
