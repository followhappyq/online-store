import React from "react"
import { connect } from "react-redux"

import { Header as BaseHeader } from "../../components"

const Header = ({ cart }) => {
  return <BaseHeader cart={cart} />
}

export default connect(({ cart }) => ({
  cart: cart.items.length,
}))(Header)
