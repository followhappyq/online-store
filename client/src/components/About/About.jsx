import React from "react"
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  YahooOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons"
import "./about.scss"
const About = () => {
  return (
    <div className="about">
      <div className="about__title">Online Store</div>
      <div className="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos ab voluptatibus hic consequuntur
        praesentium debitis, ducimus in mollitia, aliquam commodi quas, corrupti exercitationem vel accusantium nam
        natus! Rem, facilis. Commodi tenetur quae sapiente quam, adipisci corrupti delectus ipsa labore vitae quod hic
        doloribus aliquid ullam tempore cumque recusandae quidem aut quasi magni temporibus vero dignissimos veniam
        laudantium. Numquam, consectetur! Atque est eius ab adipisci! Consectetur dolores voluptatibus praesentium eos
        rem labore voluptate vel minus, accusamus exercitationem, autem iure quas recusandae ducimus inventore laborum?
        Enim hic deserunt et praesentium non. Ipsa, obcaecati assumenda. Minus, obcaecati perspiciatis molestias porro,
        quo consequuntur cum dolores fuga dolor consectetur magnam tempore quisquam nam. Eum, impedit totam? Nam
        repudiandae quo sunt, sint ducimus aspernatur rem?
      </div>
      <div className="about__social">
        <div className="about__social__title">Our social media</div>
        <div className="about__social__icons">
          <FacebookOutlined className="about__social__icon" />
          <InstagramOutlined className="about__social__icon" />
          <TwitterOutlined className="about__social__icon" />
          <LinkedinOutlined className="about__social__icon" />
          <YoutubeOutlined className="about__social__icon" />
          <YahooOutlined className="about__social__icon" />
          <WhatsAppOutlined className="about__social__icon" />
        </div>
      </div>
      <div className="about__contacts">
        <div className="about__contacts__phone">
          <strong>Phone:</strong> +123 456 789
        </div>
        <div className="about__contacts__email">
          <strong>Email:</strong> contact@gmail.com
        </div>
      </div>
    </div>
  )
}

export default About
