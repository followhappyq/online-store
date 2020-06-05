import React from "react"
import shortid from "shortid"

import { DropSideMenu } from "../"
import "./sidemenu.scss"

const SideMenu = () => {
  const items = [
    "Computer",
    "Tablets",
    "Camera",
    "Smart Home",
    "Video & PC Gaming",
    "Headphones",
    "Cell Phones",
    "Car Electronics",
    "TV & Home Audio",
    "Home Surveillance",
    "Virtual Reality",
    "Smart Watches",
  ]
  return (
    <div className="side-menu">
      <div className="side-menu__title">
        <h2>Our products</h2>
      </div>
      <ul className="side-menu__list">
        {items.map((item) => (
          <li className="side-menu__list__item" key={shortid.generate()}>
            {item}
            <DropSideMenu item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
