import mongoose, { Schema, Document } from "mongoose"
import isEmail from "validator/lib/isEmail"
import { generatePasswordHash } from "../utils/"

export interface IUser extends Document {
  email?: string
  Name?: string
  password?: string
  confirmed?: boolean
  confirm_hash?: string
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: "Email address is required",
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    name: {
      type: String,
      required: "Name is required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },

    confirm_hash: String,
  },
  {
    timestamps: true,
  }
)

UserSchema.set("toJSON", {
  virtuals: true,
})

UserSchema.pre("save", function (next) {
  const user: IUser = this

  if (!user.isModified("password")) return next()

  generatePasswordHash(user.password)
    .then((hash: any) => {
      user.password = String(hash)
      generatePasswordHash(+new Date()).then((confirmHash: any) => {
        user.confirm_hash = String(confirmHash)
        next()
      })
    })
    .catch((err) => {
      next(err)
    })
})

const UserModel = mongoose.model<IUser>("User", UserSchema)

export default UserModel
