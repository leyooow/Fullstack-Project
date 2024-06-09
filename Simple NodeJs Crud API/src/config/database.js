
const express  = require('express')
const mongoose = require('mongoose');
const uri = "mongodb+srv://leyow:Akosileo123.@backenddb.y67zig8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";
const app = express()

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Successfully");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);

    });
  } catch (error) {
    console.error("Connection Failed", error);
  }
};

module.exports = connectDB;
