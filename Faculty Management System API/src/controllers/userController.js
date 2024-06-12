const userService = require('../services/userService');

exports.createUser = async (req, res, next) => {
  try {

    // Create the user
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: 'User added',
      userInfo: user,
    });

  } catch (error) {
    console.error('Error creating user:', error);

    // Check for duplicate key error from MongoDB
    if (error.code === 11000) {
      // Extract the duplicate key value from the error message
      const duplicateKey = error.keyValue ? JSON.stringify(error.keyValue) : '';
      const formattedKeyValue = duplicateKey.replace(/[\{\}\"\\]/g, '').replace(':', ': ');
      
      res.status(409).json({
        message: 'Username exist',
        info: formattedKeyValue,
      });
    }

    next(error);  // Pass other errors to the error handling middleware
  }
};


exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (user) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};
