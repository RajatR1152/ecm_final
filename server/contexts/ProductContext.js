const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
});

const mobiles = mongoose.model('mobiles', productSchema);


module.exports = mobiles;