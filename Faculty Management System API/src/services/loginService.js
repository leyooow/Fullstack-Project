const loginRepository = require('../repositories/loginRepository');

class LoginService {
  
    async loginAuth(loginData) {
        return await loginRepository.loginAuth(loginData);
    }

  }
  
  module.exports = new LoginService();