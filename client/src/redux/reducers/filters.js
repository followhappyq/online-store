const initialState = {
  filters: null,
  filtersTitle: null,
  query: "",
  filterBy: "all",
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
    case "FILTERS:SET_QUERY":
      return {
        ...state,
        query: payload,
      }
    case "FILTERS:SET_FILTER":
      return {
        ...state,
        filterBy: payload,
      }

    default:
      return state
  }
}
