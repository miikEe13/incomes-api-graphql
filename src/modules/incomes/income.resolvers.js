// src/modules/incomes/income.resolvers.js
const incomeService = require('./income.service');

module.exports = {
  Query: {
    incomes: () => incomeService.getAllIncomes(),
    income: (_, { id }) => incomeService.getIncomeById(id),
  },
  Mutation: {
    createIncome: (_, args) => incomeService.createIncome(args),
    updateIncome: (_, { id, ...rest }) => incomeService.updateIncome(id, rest),
    deleteIncome: (_, { id }) => incomeService.deleteIncome(id),
  },
};
