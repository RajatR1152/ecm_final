const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
});

const shoes = mongoose.model('shoes', productSchema);


module.exports = shoes;