const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
const productRoutes = require("./routes/productRoutes")
app.use("/api/products", productRoutes)

module.exports = app
