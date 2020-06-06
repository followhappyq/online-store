import React from "react"
import shortid from "shortid"

import { ProductCard } from "../"
import "./productsList.scss"

const ProductsList = ({ products }) => {
  return (
    <ul className="products-list">
      {products.map((item) => (
        <ProductCard item={item} key={shortid.generate()} />
      ))}
    </ul>
  )
}

export default ProductsList
