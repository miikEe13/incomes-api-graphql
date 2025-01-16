// src/schema/index.js
const { makeExecutableSchema } = require('@graphql-tools/schema');
const incomeTypeDefs = require('../modules/incomes/income.typeDefs');
const incomeResolvers = require('../modules/incomes/income.resolvers');

const schema = makeExecutableSchema({
  typeDefs: [incomeTypeDefs],
  resolvers: [incomeResolvers],
});

module.exports = schema;
