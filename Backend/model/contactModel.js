import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('contactModel', contactSchema)