const mongoose = require('mongoose');

const watchesSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
})

const watches = new mongoose.model('watches', watchesSchema);

module.exports = watches;