import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import connectDB from "./src/config/mongo.config.js"

import short_url from "./src/routes/short_url.routes.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"

import { redirectFromShortUrl } from "./src/controller/short_url.controller.js"
import { errorHandler } from "./src/utils/errorHandler.js"
import { attachUser } from "./src/utils/attachUser.js"

dotenv.config()

const app = express()

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// attach user middleware
app.use(attachUser)

// Routes
app.use("/api/user", user_routes)
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url)

// Redirect route
app.get("/:id", redirectFromShortUrl)

// Error handler (MUST BE LAST)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {

  await connectDB()

  console.log(`Server running on http://localhost:${PORT}`)

})