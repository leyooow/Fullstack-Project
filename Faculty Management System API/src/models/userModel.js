const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    UserRole: {
        type: String,
        required: true
    },
    UserImg: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('Password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.Password = await bcrypt.hash(this.Password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

UserSchema.methods.comparePassword = function (Password) {
    return bcrypt.compare(Password, this.Password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;