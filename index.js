const express = require('express')
const bodyParser = require('body-parser')
const robotRouter = require('./robots/robotRouter')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.redirect('/robots')
})

app.use('/robots', robotRouter)

app.listen(3000, ()=> {
    console.log("Express server listening on port 3000")
})