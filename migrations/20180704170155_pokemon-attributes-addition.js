
exports.up = function(knex, Promise) {
  return knex.schema.table('pokemon', function(table) {
    table.text('short_description');
    table.text('description');
    table.text('height');
    table.text('weight');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('pokemon', function(table) {
    table.dropColumn('short_description');
    table.dropColumn('description');
    table.dropColumn('height');
    table.dropColumn('weight');
  });
};
