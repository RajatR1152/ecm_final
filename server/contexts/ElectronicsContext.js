const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
})

const electronics = mongoose.model('electronics', productSchema);

module.exports = electronics;