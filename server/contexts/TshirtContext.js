const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
});

const tshirts = mongoose.model('tshirts', productSchema);

module.exports = tshirts