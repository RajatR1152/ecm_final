const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: Array,
    rating: String
});

const homeAppliences = mongoose.model('homeAppliences', productSchema);



module.exports = homeAppliences;