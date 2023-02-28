const express = require('express');
const router = express.Router();

const { createOrder, getOrders, getOwnOrders, getOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createOrder)
router.get('/', protect, getOrders)
router.get('/my-orders', protect, getOwnOrders)
router.get('/:id', protect, getOrder)
router.put('/:id', protect, updateOrder)
router.delete('/:id', protect, deleteOrder)

module.exports = router;