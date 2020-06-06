import React from "react"

import { ProductsSideMenu as BaseProductsSideMenu } from "../../components"

const ProductsSideMenu = () => {
  const filtersTitle = {
    manufacturer: "Manufacturer",
    types: "Types",
    processor: "Processor",
    hdd: "HDD",
    memoryType: "Memory type",
    graphicCard: "Graphic card",
  }

  const filters = {
    manufacturer: [
      "Acer",
      "Apple",
      "Lenovo",
      "Dell",
      "HP",
      "Intel",
      "Raspberry",
      "Jet",
    ],
    types: ["Standard", "Compact", "Micro PC", "Nettop"],
    processor: [
      "Inter Atom",
      "Intel Celeron",
      "Intel Pentium",
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "AMD FX 4-Core",
      "AMD FX 8-Core",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
    hdd: ["HDD", "SSD"],
    memoryType: ["DDR2", "DDR3", "DDR4"],
    graphicCard: ["AMD Radeon RX", "NVIDIA GeForce GTX", "NVIDIA GeForce RTX"],
  }
  return <BaseProductsSideMenu filtersTitle={filtersTitle} filters={filters} />
}

export default ProductsSideMenu
