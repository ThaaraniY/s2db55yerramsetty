const mongoose = require("mongoose")
const HoneySchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

module.exports = mongoose.model("Honey",
    HoneySchema)