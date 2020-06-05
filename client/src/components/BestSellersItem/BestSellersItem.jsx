import React from "react"

import "./bestSellersItem.scss"

const BestSellersItem = ({ data }) => {
  return (
    <div className="best-seller__item">
      <div className="best-seller__item__header">
        <h3>{data.title}</h3>
      </div>
      <div className="best-seller__item__img">
        <img src={data.img} alt="img" />
      </div>
      <div className="best-seller__item__price">Price: ${data.price}</div>
    </div>
  )
}

export default BestSellersItem
