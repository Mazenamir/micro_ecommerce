// routes/prodRoutes.js

const express = require("express");
const router = express.Router();

const { createProduct } = require("../controller/prodController");

// POST /api/products
router.post("/", createProduct);

module.exports = router;