import React from "react"

import { ProductsList as BaseProductList } from "../../components"

const ProductsList = ({ title }) => {
  const products = [
    {
      manufacturer: "Irwin",
      productName: "Irwin Computers Coffee Lake G1-07",
      type: "Standard",
      processor: "Intel Core i5",
      hdd: "SSD",
      memoryType: "DDR3",
      graphicCard: "NVIDIA GeForce GTX",
      price: "740",
      img:
        "https://content2.onliner.by/catalog/device/header/460f0130c258dc77efb09864cfb0f37c.jpeg",
    },
    {
      manufacturer: "Jet",
      productName: "Jet Gamer 5R2600D16SD1X166L2W6",
      type: "Standard",
      processor: "Intel Core i5",
      hdd: "SSD",
      memoryType: "DDR3",
      graphicCard: "NVIDIA GeForce GTX",
      price: "840",
      img:
        "https://content2.onliner.by/catalog/device/header/8b98d73d89e7118f4a91a487b24e342e.jpeg",
    },
    {
      manufacturer: "256Bit",
      productName: "256Bit i9400161660S",
      type: "Standard",
      processor: "Intel Core i5",
      hdd: "SSD",
      memoryType: "DDR3",
      graphicCard: "NVIDIA GeForce GTX",
      price: "940",
      img:
        "https://content2.onliner.by/catalog/device/header/ed72543c2b356de91792396104e3b352.jpeg",
    },
  ]
  return <BaseProductList products={products} />
}

export default ProductsList
