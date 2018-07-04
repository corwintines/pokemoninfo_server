const knex = require('./knex'); // The connection from knex.js

// Database query methods
module.exports = {
  readAll(table) {
    return knex(table);
  },
  readSingle(table, attr, val) {
    return knex(table).where(attr, val).first();
  }
}