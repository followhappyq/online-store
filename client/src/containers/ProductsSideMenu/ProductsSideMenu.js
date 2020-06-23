import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import filtersTitleDB from "../../json/filtersTitle.json"
import filtersDB from "../../json/filters.json"

import { ProductsSideMenu as BaseProductsSideMenu } from "../../components"
import { filtersAction } from "../../redux/actions"

const ProductsSideMenu = ({ setFiltersTitle, setFiltersDescription, setQuery, filters, category }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const [categoryTitle, setCategoryTitle] = useState(category)

  const onStateChange = (e) => {
    const value = e.target.name

    if (selectedItems.includes(value)) {
      const index = selectedItems.indexOf(value)
      setSelectedItems([...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)])
      setQuery([...filters.query.slice(0, index), ...filters.query.slice(index + 1)])
    } else {
      setSelectedItems([...selectedItems, value])
      setQuery([...filters.query, value])
    }
  }

  useEffect(() => {
    setFiltersTitle(filtersTitleDB)
    setFiltersDescription(filtersDB)
    // eslint-disable-next-line
  }, [filtersTitleDB, filtersDB])

  return (
    <BaseProductsSideMenu
      filtersTitle={filters.filtersTitle}
      filters={filters.filters}
      onStateChange={onStateChange}
      selectedItems={selectedItems}
      category={categoryTitle}
    />
  )
}

export default connect(
  ({ filters, filtersTitle, category, products }) => ({
    filters,
    filtersTitle,
    category: category.category,
    products: products.products,
  }),
  filtersAction
)(ProductsSideMenu)
