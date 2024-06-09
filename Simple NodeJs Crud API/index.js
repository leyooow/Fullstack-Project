const express  = require('express')
const connectDB = require('./src/config/database')
const User = require('./src/models/UserModel')
const app = express()


app.use(express.json())

// Get all users
app.get('/api/GetAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Create user
app.post('/api/CreateUser', async (req, res) => {
    try {
        
        const user = await User.create(req.body)
        res.status(200).json(user)

    } catch (error) {
        
        res.status(500).json({message: error.message})

    }
})


connectDB();

const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);

    });