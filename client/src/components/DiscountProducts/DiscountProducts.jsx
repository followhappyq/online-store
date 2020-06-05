import React from "react"
import { Carousel } from "antd"

import "./discountProducts.scss"

const DiscountProducts = () => {
  return (
    <div className="discount-products">
      <Carousel autoplay={true}>
        <div>
          <h3>Some discount products</h3>
          <p>-60%</p>
        </div>
        <div>
          <h3>Some discount products</h3>
          <p>-40%</p>
        </div>
        <div>
          <h3>Some discount products</h3>
          <p>-33%</p>
        </div>
        <div>
          <h3>Some discount products</h3>
          <p>-15%</p>
        </div>
      </Carousel>
    </div>
  )
}

export default DiscountProducts
