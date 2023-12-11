const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    contact: {
        type: Number,
        required: [true, 'contact number is required']
    }
})

module.exports = mongoose.model('contact', contactSchema);