
const express = require('express')
const mongoose = require('mongoose');
const logger = require('../utils/logger.js')

const uri = "mongodb+srv://leyow:Akosileo123.@backenddb.y67zig8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";
const app = express()

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected Successfully');
  } catch (error) {
    logger.error('Connection Failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
