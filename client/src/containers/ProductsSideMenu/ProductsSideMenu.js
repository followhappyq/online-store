import React, { useEffect } from "react"
import { connect } from "react-redux"

import filtersTitleDB from "../../json/filtersTitle.json"
import filtersDB from "../../json/filters.json"

import { ProductsSideMenu as BaseProductsSideMenu } from "../../components"
import { filtersAction } from "../../redux/actions"

const ProductsSideMenu = ({ setFiltersTitle, setFilters, filters }) => {
  useEffect(() => {
    setFiltersTitle(filtersTitleDB)
    setFilters(filtersDB)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <BaseProductsSideMenu
      filtersTitle={filters.filtersTitle}
      filters={filters.filters}
    />
  )
}

export default connect(
  ({ filters, filtersTitle }) => ({
    filters,
    filtersTitle,
  }),
  filtersAction
)(ProductsSideMenu)
