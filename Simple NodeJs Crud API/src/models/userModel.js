const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {

        Username: {
            type: String,
            required: true,
            // required: [true, "Please enter your username"]
        },
        Password: {
            type: String,
            required: true,
            // required: [true, "Please enter your password"]
        },

        UserRole: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User