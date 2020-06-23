import React, { useState } from "react"
import { useSelector } from "react-redux"

import { Cart as BaseCart } from "../../components"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)

  const [totalAmount, setTotalAmount] = useState(0)

  return <BaseCart cartItems={cartItems} totalAmount={totalAmount} />
}

export default Cart
