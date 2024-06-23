const corsOptions = {
    origin: 'https://faculty-management-syste-20498.web.app/', // Replace with your Firebase Hosting URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all methods
    allowedHeaders: ['Content-Type'],
  };

  module.exports = corsOptions;