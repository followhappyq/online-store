import React from "react"

import "./ourInstagram.scss"

const OurInstagram = ({ images }) => {
  return (
    <div className="our-instagram">
      <div className="our-instagram__title">
        <h3>Our instagram</h3>
      </div>
      <div className="our-instagram__content">
        {images &&
          images.map((image) => (
            <a
              key={image.url}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="our-instagram__content-image"
                src={image.thumbnailUrl}
                alt="1"
              />
            </a>
          ))}
      </div>
    </div>
  )
}

export default OurInstagram
