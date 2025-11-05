const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    cart: Array,
    favourites: Array,
    history: Array,
    email: String,
    orders: Array,
    address: String,
    avatar: String, 

})


const user = mongoose.model('user', userSchema);

module.exports = user;