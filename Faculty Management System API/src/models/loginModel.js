const mongoose = require('mongoose')

const LoginSchema = mongoose.Schema(
    {

        Username: {
            type: String,
            required: true,
            // unique: [true, "Username exist"]
            // required: [true, "Please enter your username"]
        },
        Password: {
            type: String,
            required: true,
            // required: [true, "Please enter your password"]
        },
    },
    {
        timestamps: true
    }
)

const Login = mongoose.model('Login', LoginSchema)

module.exports = Login