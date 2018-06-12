const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/robot')

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error'))
connection.on('connected', ()=> {
    console.log('connected to mongodb')
})

module.exports = mongoose