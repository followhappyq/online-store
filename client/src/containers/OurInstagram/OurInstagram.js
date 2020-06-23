import React, { useEffect } from "react"
import { connect } from "react-redux"

import contentApi from "../../api/instagramApi"
import { instagramActions } from "../../redux/actions"
import { OurInstagram as BaseInstagram } from "../../components"

const OurInstagram = ({ fetchInstagram, instagram }) => {
  useEffect(() => {
    contentApi
      .fetchInstagramPhotos("https://www.instagram.com/xkompl/")
      .then((data) => {
        fetchInstagram(data)
      })
      .catch((error) => {})
    // eslint-disable-next-line
  }, [])
  return <BaseInstagram images={instagram} />
}

export default connect(({ instagram }) => ({ instagram: instagram.instagram }), instagramActions)(OurInstagram)
