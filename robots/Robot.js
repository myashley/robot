const mongoose = require('../db/connection')
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema

const robotSchema = new Schema({
    name: String,
    type: String,
    bodyColour: String,
    faceColour: String,
    highlightColour: String,
    personality: String,
    message: [String],
    dob: Date,
    price: Number,
})

robotSchema.plugin(timestamps)

const robotModel = mongoose.model('Robot', robotSchema)


module.exports = robotModel