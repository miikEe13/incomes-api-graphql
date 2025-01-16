// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const { connectDB, sequelize } = require('./config/database');
const schema = require('./schema');

async function startServer() {
  // Connect to the database
  await connectDB();

  // Instantiate Express
  const app = express();

  // Handle CORS
  app.use(cors());

  // Create Apollo Server
  const server = new ApolloServer({
    schema,
    // context: ({ req }) => { /* Extract user from token if needed */ },
  });

  // Start Apollo Server and apply middleware to Express
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is ready at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((err) => {
  console.error('Error starting the server:', err);
});
