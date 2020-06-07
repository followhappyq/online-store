const actions = {
  setFilters: (filters) => ({
    type: "FILTERS:SET_FILTERS",
    payload: filters,
  }),
  setFiltersTitle: (filtersTitle) => ({
    type: "FILTERS:SET_FILTERS_TITLE",
    payload: filtersTitle,
  }),
}

export default actions
