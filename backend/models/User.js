const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number
});

module.exports = mongoose.model("users",userScheme);
