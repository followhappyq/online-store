import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import filtersTitleDB from "../../json/filtersTitle.json"
import filtersDB from "../../json/filters.json"

import { ProductsSideMenu as BaseProductsSideMenu } from "../../components"
import { filtersAction } from "../../redux/actions"

const ProductsSideMenu = ({
  setFiltersTitle,
  setFiltersDescription,
  setFilter,
  setQuery,
  filters,
}) => {
  const [filterQuery, setFilterQuery] = useState("")
  const [checkBox, setCheckBox] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const onStateChange = (e) => {
    const value = e.target.name
    if (selectedItems.includes(value)) {
      const index = selectedItems.indexOf(value)
      setSelectedItems([
        ...selectedItems.slice(0, index),
        ...selectedItems.slice(index + 1),
      ])
    } else {
      setSelectedItems([...selectedItems, value])
    }
  }

  useEffect(() => {
    setFiltersTitle(filtersTitleDB)
    setFiltersDescription(filtersDB)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFilterChange = (e) => {
    setCheckBox(!checkBox)
  }

  return (
    <BaseProductsSideMenu
      filtersTitle={filters.filtersTitle}
      filters={filters.filters}
      onFilterChange={onFilterChange}
      onStateChange={onStateChange}
      selectedItems={selectedItems}
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
