import React, { useEffect } from "react"
import { connect } from "react-redux"
import DB from "../../json/products.json"

import { ProductsList as BaseProductList } from "../../components"
import { productsAction } from "../../redux/actions"

const ProductsList = ({ title, setProducts, products }) => {
  useEffect(() => {
    setProducts(DB)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BaseProductList products={products && products[title.toLowerCase()]} />
  )
}

export default connect(
  ({ products }) => ({
    products: products.products,
  }),
  productsAction
)(ProductsList)
