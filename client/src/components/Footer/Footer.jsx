import React from "react"
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons"

import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <p>Online Store</p>
      </div>
      <div className="footer__socials">
        <InstagramOutlined className="footer__socials__item" />
        <FacebookOutlined className="footer__socials__item" />
        <LinkedinOutlined className="footer__socials__item" />
        <TwitterOutlined className="footer__socials__item" />
      </div>
      <div className="footer__copyrights">
        <p>Copyrights &copy; 2020</p>
      </div>
    </div>
  )
}

export default Footer
