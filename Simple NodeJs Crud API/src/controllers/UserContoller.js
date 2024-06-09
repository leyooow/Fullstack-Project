const express  = require('express')
const connectDB = require('./config/database')
const User = require('./models/UserModel')
const app = express()

// connectDB();

app.use(express.json())


app.get('/api/GetUser', async (req, res) => {
    res.send("Hello from node API")
})


// app.post('/api/CreateUser', async (req, res) => {
//     try {
//         const user = await User.create(req.body)
//         res.status(200).json(user)


//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


