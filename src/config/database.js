// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // User
  process.env.DB_PASS,     // Password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Set to true to see SQL logs in the console
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to MySQL');
    
    //Sequelize to automatically create tables:
    await sequelize.sync({ force: false }); 
    // "force:true" drops tables and recreates them every time (useful in development).
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  sequelize,
  connectDB
};
