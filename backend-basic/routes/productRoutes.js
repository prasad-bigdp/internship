const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

// Get all products
router.get("/", async (req, res) => {
	const products = await Product.find().sort({ createdAt: -1 })
	res.json(products)
})

// Get one product
router.get("/:id", async (req, res) => {
	const product = await Product.findById(req.params.id)
	res.json(product)
})

// Create new product
router.post("/", async (req, res) => {
	const product = new Product(req.body)
	await product.save()
	res.status(201).json(product)
})

// Update product
router.put("/:id", async (req, res) => {
	const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	res.json(updated)
})

// Delete product
router.delete("/:id", async (req, res) => {
	await Product.findByIdAndDelete(req.params.id)
	res.sendStatus(204)
})

module.exports = router
