const actions = {
  setFiltersDescription: (filters) => ({
    type: "FILTERS:SET_FILTERS",
    payload: filters,
  }),
  setFiltersTitle: (filtersTitle) => ({
    type: "FILTERS:SET_FILTERS_TITLE",
    payload: filtersTitle,
  }),
  setQuery: (query) => ({
    type: "FILTERS:SET_QUERY",
    payload: query,
  }),
  setFilter: (filter) => ({
    type: "FILTERS:SET_FILTER",
    payload: filter,
  }),
}

export default actions
