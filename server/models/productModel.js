const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Please provide the product name']
    },
    asin: {
        type: String,
        required: [true, 'Please provide the product asin'],
        unique: true
    },
    stockLevel: {
        type: Number,
        default: 1000,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);