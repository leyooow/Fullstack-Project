// index.js (or wherever you define your Firebase functions)

const functions = require('firebase-functions');
const app = require('../src/app');
const { port }  =  require('../src/config/config'); // Assuming you define port in environment or default to 5000
const logger = require('../src/utils/logger');

// Expose Express app as a Firebase Function
exports.app = functions.https.onRequest(app);

// Start server (optional, not needed for Firebase Functions deployment)
// This is used for local development if you want to run the server independently
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
}
