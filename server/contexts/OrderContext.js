const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: String,
    description: Array,
    price: String,
    image: String,
    rating: String,
    name: String,
    collection: String,
    quantity: Number,
    email: String
})

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;