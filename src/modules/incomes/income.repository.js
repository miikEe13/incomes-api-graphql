// src/modules/incomes/income.repository.js
const Income = require('./income.model');

class IncomeRepository {
  async getAll() {
    return await Income.findAll();
  }

  async getById(id) {
    return await Income.findByPk(id);
  }

  async create(incomeData) {
    return await Income.create(incomeData);
  }

  async update(id, newData) {
    // First, search for the record
    const income = await Income.findByPk(id);
    if (!income) return null;

    // Update with the new data
    await income.update(newData);
    return income; 
  }

  async delete(id) {
    // Use findByPk and then destroy, or directly destroy with where clause
    const income = await Income.findByPk(id);
    if (!income) return null;

    await income.destroy();
    return income; // Return the deleted record
  }
}

module.exports = new IncomeRepository();
