import React from "react"
import { useDispatch } from "react-redux"

import { addToCart } from "../../redux/actions/cart"
import { ProductCard as BaseProductCard } from "../../components"

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const onProductAdded = () => {
    dispatch(addToCart(item))
  }

  return <BaseProductCard item={item} onProductAdded={onProductAdded} />
}

export default ProductCard
