const initialState = {
  products: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCTS:SET_PRODUCTS":
      return {
        ...state,
        products: payload,
      }

    default:
      return state
  }
}
