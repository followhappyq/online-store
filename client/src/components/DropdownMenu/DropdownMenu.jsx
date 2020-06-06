import React from "react"
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"

import "./dropdownmenu.scss"
import { Link } from "react-router-dom"

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-menu__item">
        <Link className="dropdown-menu__item__signin" to="/signin">
          Sign In
        </Link>
      </li>
      <li className="dropdown-menu__item">
        <Link className="dropdown-menu__item__signup" to="signup">
          Sign Up
        </Link>
      </li>
      <li className="dropdown-menu__item__hr"></li>
      <li className="dropdown-menu__item">
        <Link className="dropdown-menu__item__link" to="/profile">
          <UserOutlined />
          Profile
        </Link>
      </li>
      <li className="dropdown-menu__item">
        <Link className="dropdown-menu__item__link" to="/orders">
          <ShoppingCartOutlined /> Orders
        </Link>
      </li>
    </ul>
  )
}

export default DropdownMenu
