import React from "react"

import "./dropSideMenu.scss"

const DropSideMenu = ({ item }) => {
  return (
    <ul className="drop-side-menu">
      <li className="drop-side-menu__item">{item}</li>
    </ul>
  )
}

export default DropSideMenu
