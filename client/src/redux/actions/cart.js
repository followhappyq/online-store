const actions = {
  addToCart: (product) => ({
    type: "CART:ADD_PRODUCT",
    payload: product,
  }),
  removeFromCart: (id) => ({
    type: "CART:REMOVE_PRODUCT",
    payload: id,
  }),
}

export default actions
