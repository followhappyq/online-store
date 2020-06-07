import React from "react"
import shortid from "shortid"
import { Checkbox } from "antd"

import "./productsSideMenu.scss"

const ProductsSideMenu = ({
  filters,
  filtersTitle,
  onStateChange,
  selectedItems,
  category,
}) => {
  return (
    <div className="products-sidemenu">
      {filters !== null && filtersTitle !== null && category !== null
        ? Object.keys(filtersTitle[category]).map((elem) => (
            <div className="products-sidemenu__item" key={shortid.generate()}>
              <div className="products-sidemenu__item__title">
                <p>{filtersTitle[category][elem]}</p>
              </div>
              <ul className="products-sidemenu__item__list">
                {filters[category][elem].map((item) => (
                  <li
                    className="products-sidemenu__item__list__element"
                    key={shortid.generate()}
                  >
                    <Checkbox
                      name={item}
                      onChange={onStateChange}
                      checked={selectedItems.includes(item)}
                      listTitle={filtersTitle[category][elem]}
                    >
                      {item}
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : "zlp"}
    </div>
  )
}

ProductsSideMenu.defaultProps = {
  category: "computers",
}

export default ProductsSideMenu
