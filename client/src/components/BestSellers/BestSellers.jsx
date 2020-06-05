import React from "react"

import { BestSellersItem } from "../"
import "./bestsellers.scss"

const BestSellers = () => {
  const items = [
    {
      title: "ASUS ZenBook 13",
      img:
        "https://www.x-kom.pl/i/setup/images/prod/big/product-big,,2020/5/pr_2020_5_27_9_45_22_984_09.jpg",
      price: "899",
    },
    {
      title: "ASUS ZenBook Flip",
      img:
        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/5/pr_2020_5_20_15_22_35_225_00.jpg",
      price: "859",
    },
    {
      title: "Huawei MateBook D 15",
      img:
        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/1/pr_2020_1_20_9_29_55_934_06.jpg",
      price: "789",
    },
    {
      title: "Lenovo IdeaPad L340-15",
      img:
        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_2_10_51_9_110_10.jpg",
      price: "985",
    },
    {
      title: "ASUS ZenBook 14",
      img:
        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/12/pr_2018_12_28_9_33_18_276_03.jpg",
      price: "950",
    },
  ]
  return (
    <div className="best-sellers">
      {items.map((item) => (
        <BestSellersItem data={item} />
      ))}
    </div>
  )
}

export default BestSellers
