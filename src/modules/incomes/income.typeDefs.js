// src/modules/incomes/income.typeDefs.js
const { gql } = require('apollo-server-express');

module.exports = gql`
  type Income {
    id: ID!
    description: String!
    amount: Float!
    date: String
    createdAt: String
    updatedAt: String
  }

  # Queries
  type Query {
    incomes: [Income!]!
    income(id: ID!): Income
  }

  # Mutations
  type Mutation {
    createIncome(description: String!, amount: Float!, date: String): Income!
    updateIncome(id: ID!, description: String, amount: Float, date: String): Income
    deleteIncome(id: ID!): Income
  }
`;
