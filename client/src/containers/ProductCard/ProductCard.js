import React from "react"
import { connect } from "react-redux"

import { cartActions } from "../../redux/actions"
import { ProductCard as BaseProductCard } from "../../components"

const ProductCard = ({ item, addToCart }) => {
  const onProductAdded = () => {
    addToCart(item)
  }

  return <BaseProductCard item={item} onProductAdded={onProductAdded} />
}

export default connect(({}) => ({}), cartActions)(ProductCard)
