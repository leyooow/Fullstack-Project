const express  = require('express')
const connectDB = require('./config/database')

const app = express()

connectDB();



app.get('/GetUser', (req, res) => {
    res.send("Hello from node API")
})



