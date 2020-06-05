const initialState = {
  instagram: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "INSTAGRAM:SET_INSTAGRAM":
      return {
        ...state,
        instagram: payload,
      }

    default:
      return state
  }
}
