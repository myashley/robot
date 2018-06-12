const mongoose = require('../db/connection')


const Schema = mongoose.Schema

const robotSchema = new Schema({
    name: String,
    type: [String],
    bodyColour: [String],
    faceColour: [String],
    highlightColour: [String],
    personality: [String],
    message: String,
    dob: Date,
    price: Number,
})