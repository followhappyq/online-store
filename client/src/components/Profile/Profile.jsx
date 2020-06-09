import React from "react"
import { Input } from "antd"

import { EditIcon } from "../"

import "./profile.scss"

const Profile = ({ info }) => {
  return (
    <div className="profile">
      <div className="profile__title">
        <h3>Profile</h3>
      </div>
      <div className="profile__name">
        <div className="profile__name__description">Profile name:</div>
        <Input
          className="profile__name__title"
          value={info.name}
          disabled={true}
        ></Input>
        <EditIcon />
      </div>
      <div className="profile__number">
        <div className="profile__number__description">Phone number:</div>
        <Input
          className="profile__number__title"
          value={info.number}
          disabled={true}
        ></Input>
        <EditIcon />
      </div>
      <div className="profile__adress">
        <div className="profile__adress__description">Adress:</div>
        <Input
          className="profile__adress__title"
          value={info.name}
          disabled={true}
        ></Input>
        <EditIcon />
      </div>
      <div className="profile__city">
        <div className="profile__city__description">City:</div>
        <Input
          className="profile__city__title"
          value={info.name}
          disabled={true}
        ></Input>
        <EditIcon />
      </div>
      <div className="profile__email">
        <div className="profile__email__description">Profile email</div>
        <Input
          className="profile__email__title"
          value={info.email}
          disabled={true}
        ></Input>
      </div>
      <div className="profile__update-button">update</div>
    </div>
  )
}

export default Profile
