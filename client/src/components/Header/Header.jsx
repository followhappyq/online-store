import React from "react"
import {
  SearchOutlined,
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons"
import { Dropdown, Button } from "antd"

import { SearchParameters } from "../"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Online Store</div>
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
        <div className="header__icons__icon">
          <UserOutlined>
            <a href="/">Profile</a>
          </UserOutlined>
        </div>
        <div className="header__icons__icon">
          <ShoppingCartOutlined>
            <a href="/">Cart</a>
          </ShoppingCartOutlined>
        </div>
      </div>
    </div>
  )
}

export default Header
