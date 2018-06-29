const knex = require('./knex'); // The connection from knex.js

// Database query methods
module.exports = {
  getAllPokemon() {
    return knex('pokemon');
  },
  getPokemon(pokemon_number) {
    return knex('pokemon').where('pokemon_number', pokemon_number).first();
  }
}