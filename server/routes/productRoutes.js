const express = require('express');
const router = express.Router();

const { registerProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, registerProduct)
router.get('/', protect, getProducts)
router.get('/:id', protect, getProduct)
router.put('/:id', protect, updateProduct)
router.delete('/:id', protect, deleteProduct)

module.exports = router;