const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config/config')
class LoginRepository {
    async loginAuth(loginData) {
        
        try {
            const { Username, Password } = loginData;

            const existingUser = await User.findOne({ Username: Username });

            if (!existingUser) {
                return { success: false, message: "Invalid username or password" };
            }

            // Compare provided password with stored password hash
            const isMatch = await existingUser.comparePassword(Password);

            if (!isMatch) {
                return { success: false, message: "Invalid username or password" };
            }

            // Passwords match, login successful
            const token = jwt.sign({ Username }, SECRET_KEY, { expiresIn: '1h' });
         

            return { success: true, message: "Login successful", token: token  };
            
        } catch (error) {
            console.error(error);
            return { success: false, message: "Server error" };
        }
    }
}

module.exports = new LoginRepository();
