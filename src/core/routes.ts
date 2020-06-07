import bodyParser from "body-parser"
import express from "express"
import socket from "socket.io"
import cors from "cors"
import { checkAuth } from "../middlewares"
import { loginValidation, registerValidation } from "../utils/validations"

import { UserCtrl } from "../controllers"

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io)

  app.use(bodyParser.json())
  app.use(checkAuth)

  app.get("/user/me", UserController.getMe)
  app.post("/user/signup", registerValidation, UserController.create)
  app.post("/user/signin", loginValidation, UserController.login)
  app.get("/user/find", UserController.findUsers)
  app.get("/user/:id", UserController.show)
}

export default createRoutes
