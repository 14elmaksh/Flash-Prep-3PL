const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc        Register new product
// @route       POST /api/products
// @access      Private
const registerProduct = asyncHandler(async (req, res) => {
    const { productName, asin, stockLevel } = req.body;

	if (!productName || !asin) {
		res.status(400);
		throw new Error("Please add required fields");
	}

    // Create product
	const product = await Product.create(req.body);

	if (product) {
		res.status(201).json(product);
	} else {
		res.status(400);
		throw new Error("Product data not saved!");
	}
});

// @desc        get products
// @route       GET /api/products
// @access      Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
});

// @desc        get products
// @route       GET /api/products/:id
// @access      Private
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
});

// @desc        update product
// @route       PUT /api/products/:id
// @access      Private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedProduct);
});

// @desc        delete product
// @route       DELETE /api/products/:id
// @access      Private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }

    await Product.remove(product);

    res.status(200).json({ id: req.params.id });
});

module.exports = {
	registerProduct,
	getProducts,
	getProduct,
    updateProduct,
    deleteProduct
};