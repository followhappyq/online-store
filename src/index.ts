import express from "express"
import { createServer } from "http"
import dotenv from "dotenv"

import "./core/db"
import createRoutes from "./core/routes"
import createSocket from "./core/socket"

dotenv.config()
const app = express()
const http = createServer(app)
const io = createSocket(http)

createRoutes(app, io)

http.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:3003`)
})
