const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc        Register new order
// @route       POST /api/orders
// @access      Private
const createOrder = asyncHandler(async (req, res) => {
    const { product } = req.body;

	if (!product) {
		res.status(400);
		throw new Error("Please add product details");
	}

    // Create order
	const order = await Order.create({
        ...req.body,
        owner: req.user.id,
    });

	if (order) {
		res.status(201).json(order);
	} else {
		res.status(400);
		throw new Error("Order data not saved!");
	}
});

// @desc        get orders
// @route       GET /api/orders
// @access      Private
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find().populate("owner").populate("product");

    res.status(200).json(orders);
});

// @desc        get specific user orders
// @route       GET /api/orders
// @access      Private
const getOwnOrders = asyncHandler(async (req, res) => {
    const ownOrders = await Order.find({ owner: req.user.id }).populate("owner").populate("product");

    res.status(200).json(ownOrders);
});

// @desc        get orders
// @route       GET /api/orders/:id
// @access      Private
const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("owner").populate("product");
    res.status(200).json(order);
});

// @desc        update order
// @route       PUT /api/orders/:id
// @access      Private
const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(400);
        throw new Error("Order not found");
    }

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedOrder);
});

// @desc        delete order
// @route       DELETE /api/orders/:id
// @access      Private
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(400);
        throw new Error("Order not found");
    }

    await Order.remove(order);

    res.status(200).json({ id: req.params.id });
});

module.exports = {
	createOrder,
	getOrders,
    getOwnOrders,
	getOrder,
    updateOrder,
    deleteOrder
};