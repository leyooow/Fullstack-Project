// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const connectDB = require('./config/database');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');
const cors = require('cors');
const corsOptions = require('./config/corsOption');

const app = express();
connectDB();
// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/login', loginRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
