const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Product", loginSchema);