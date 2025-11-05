const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: Array,
    rating: String,
    image: String
})

const allProds = new mongoose.model('allProds', prodSchema);

module.exports = allProds;