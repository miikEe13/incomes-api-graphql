// src/modules/incomes/income.service.js

const incomeRepository = require('./income.repository');

class IncomeService {
  async getAllIncomes() {
    return await incomeRepository.getAll();
  }

  async getIncomeById(id) {
    return await incomeRepository.getById(id);
  }

  async createIncome(data) {
    // Example of business validation
    if (data.amount < 0) {
      throw new Error('Amount cannot be negative');
    }
    return await incomeRepository.create(data);
  }

  async updateIncome(id, newData) {
    // Additional validations could be added, for example, if newData.amount < 0
    const updated = await incomeRepository.update(id, newData);
    if (!updated) {
      throw new Error(`Income with id = ${id} was not found`);
    }
    return updated;
  }

  async deleteIncome(id) {
    const deleted = await incomeRepository.delete(id);
    if (!deleted) {
      throw new Error(`Income with id = ${id} was not found`);
    }
    return deleted;
  }
}

module.exports = new IncomeService();