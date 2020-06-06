import React from "react"
import shortid from "shortid"

import { Checkbox } from "antd"

import "./productsSideMenu.scss"

const ProductsSideMenu = ({ filters, filtersTitle }) => {
  return (
    <div className="products-sidemenu">
      {Object.keys(filtersTitle).map((elem) => (
        <div className="products-sidemenu__item" key={shortid.generate()}>
          <div className="products-sidemenu__item__title">
            <p>{filtersTitle[elem]}</p>
          </div>
          <ul className="products-sidemenu__item__list">
            {filters[elem].map((item) => (
              <li
                className="products-sidemenu__item__list__element"
                key={shortid.generate()}
              >
                <Checkbox>{item}</Checkbox>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ProductsSideMenu
