const initialState = {
  category: "computers",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CATEGORY:SET_CATEGORY":
      return {
        ...state,
        category: payload,
      }

    default:
      return state
  }
}
