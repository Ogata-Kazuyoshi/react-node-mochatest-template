/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('testtable', function (table) {
    table.increments('id').primary(); // Set this column as the primary key
    table.string('name', 64).notNullable();
    table.string('description', 64).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('testtable');
};
