import bcrypt from "bcryptjs"

export default (password: string | number = "") => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password.toString(), 10, function (err: any, hash: string) {
      if (err) return reject(err)

      resolve(hash)
    })
  })
}
