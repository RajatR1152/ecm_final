const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
});

const laptops = mongoose.model('laptops', productSchema);


module.exports = laptops;