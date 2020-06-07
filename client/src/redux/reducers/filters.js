const initialState = {
  filters: null,
  filtersTitle: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTERS:SET_FILTERS":
      return {
        ...state,
        filters: payload,
      }
    case "FILTERS:SET_FILTERS_TITLE":
      return {
        ...state,
        filtersTitle: payload,
      }

    default:
      return state
  }
}
