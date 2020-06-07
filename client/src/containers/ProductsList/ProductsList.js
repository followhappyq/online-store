import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import DB from "../../json/products.json"

import { ProductsList as BaseProductList } from "../../components"
import { productsAction } from "../../redux/actions"

const ProductsList = ({ title, setProducts, products, query }) => {
  useEffect(() => {
    setProducts(DB)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BaseProductList products={products && products[title.toLowerCase()]} />
  )
}

const filterProducts = (products, query) => {
  return products.filter((product) => {
    query.map((item) => product.description.toLowerCase().indexOf(item) >= 0)
  })
}

export default connect(
  ({ products, filters, category }) => ({
    products: products.products,
    query: filters.query,
  }),
  productsAction
)(ProductsList)
/* 
&& filterProducts(products.products[category.category], filters.query), */
