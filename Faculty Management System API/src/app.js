const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const connectDB = require('./config/database');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');
const { port } = require('./config/config');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/login', loginRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
});

module.exports = app;
