import React from "react"
import shortid from "shortid"

import { Checkbox } from "antd"

import "./productsSideMenu.scss"

const ProductsSideMenu = ({ filters, filtersTitle }) => {
  const def = "computers"

  return (
    <div className="products-sidemenu">
      {filters !== null && filtersTitle !== null
        ? Object.keys(filtersTitle[def]).map((elem) => (
            <div className="products-sidemenu__item" key={shortid.generate()}>
              <div className="products-sidemenu__item__title">
                <p>{filtersTitle[def][elem]}</p>
              </div>
              <ul className="products-sidemenu__item__list">
                {filters[def][elem].map((item) => (
                  <li
                    className="products-sidemenu__item__list__element"
                    key={shortid.generate()}
                  >
                    <Checkbox>{item}</Checkbox>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : "zlp"}
    </div>
  )
}

export default ProductsSideMenu
