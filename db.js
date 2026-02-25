// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URL;

// Retry logic
const connectWithRetry = () => {
  mongoose.connect(MONGO_URI) // No options needed for Mongoose 7+
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => {
      console.error('❌ MongoDB connection error:', err);
      console.log('🔄 Retrying connection in 5 seconds...');
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    });
};

// Listen for disconnections
mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB disconnected. Retrying connection...');
  connectWithRetry();
});

// Start initial connection
connectWithRetry();

// Export mongoose for other files
module.exports = mongoose;