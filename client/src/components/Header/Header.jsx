import React from "react"
import { Link } from "react-router-dom"
import {
  SearchOutlined,
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons"
import { Dropdown, Button } from "antd"

import { SearchParameters, DropdownMenu } from "../"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">Online Store</Link>
      </div>
      <div className="header__search">
        <div className="header__search__field">
          <input type="text" className="header__search__field-panel"></input>
          <Dropdown overlay={SearchParameters} placement="bottomCenter">
            <Button className="header__search__field-button">
              Everywhere <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="header__search-button">
          <SearchOutlined />
        </div>
      </div>
      <div className="header__icons">
        <ul className="header__icons__icon">
          <li className="header__icons__icon__item">
            <Link to="/profile">
              <UserOutlined />
            </Link>
          </li>
          <li className="header__icons__icon__item__drop">
            <DropdownMenu />
          </li>
        </ul>
        <ul className="header__icons__icon">
          <Link to="/cart">
            <ShoppingCartOutlined />
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
