export const ADD_PRODUCT = "CART:ADD_PRODUCT"
export const REMOVE_PRODUCT = "CART:REMOVE_PRODUCT"

export const addToCart = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const removeFromCart = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
})
