
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', (table) => {
    table.increments().primary();
    table.integer('pokemon_number');
    table.text('pokemon_name');
    table.text('type_one');
    table.text('type_two');
    table.text('background_color');
    table.json('polygon_coordinates');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
