const mongoose = require('mongoose');

const tvSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: Array,
    image: String,
    rating: String
})

const tvs = new mongoose.model('tvs', tvSchema);

module.exports = tvs;