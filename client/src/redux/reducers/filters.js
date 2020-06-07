const initialState = {
  products: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTERS:SET_FILTERS":
      return {
        ...state,
        products: payload,
      }

    default:
      return state
  }
}
