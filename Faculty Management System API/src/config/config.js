require('dotenv').config();

const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI,
  },

  SECRET_KEY: '9c5c92cc3f2459a2b468c90a41d6e0833321f7ec57a05a17bdb86512ae002040b2d84d4d54ea9f84700639a3738e0f1d268d2bcb345303a62b20846f1bce7633',
};
