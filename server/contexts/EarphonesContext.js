const mongoose = require('mongoose');

const earphonesSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: Array,
    rating: String,
    image: String
})

const earphones = new mongoose.model('earphones', earphonesSchema);

module.exports = earphones;