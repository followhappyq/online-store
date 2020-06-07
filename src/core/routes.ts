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

  app.get("/me", UserController.getMe)
  app.post("/signup", registerValidation, UserController.create)
  app.post("/signin", loginValidation, UserController.login)
  app.get("/find", UserController.findUsers)
  app.get("/:id", UserController.show)
}

export default createRoutes
