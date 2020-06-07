import React from "react"
import shortid from "shortid"

import { ProductCard } from "../"
import "./productsList.scss"

const ProductsList = ({ products }) => {
  return (
    <ul className="products-list">
      {products
        ? products.map((item) => (
            <ProductCard item={item} key={shortid.generate()} />
          ))
        : "Something went wrong."}
    </ul>
  )
}

export default ProductsList
