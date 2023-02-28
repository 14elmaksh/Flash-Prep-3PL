const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    qnty: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);