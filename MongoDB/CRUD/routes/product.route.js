const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts); // Get all products

router.get("/:id", getProduct); // Get a single product by ID

router.post("/", createProduct); // Create a new product

router.put("/:id", updateProduct); // Update a product

router.delete("/:id", deleteProduct); // Delete a product

module.exports = router;
