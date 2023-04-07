const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

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

module.exports = mongoose.model("Pessoa", loginSchema);