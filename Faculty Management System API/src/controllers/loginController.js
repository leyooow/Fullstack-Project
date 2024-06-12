const LoginService = require('../services/loginService.js')

exports.loginAuth = async (req, res, next) => {
    try {
        const {Username, Password} = req.body;
        const loginData = {Username, Password};

        const login = await LoginService.loginAuth(loginData);
        
        const {success, message } = login;

        if(success) {
            
        }

        res.json(login);

    } catch (error) {
        next(error);
    }
};
