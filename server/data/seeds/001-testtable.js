/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('testtable').del();
  await knex('testtable').insert([
    { name: 'tanachu', description: 'chu-chu-chu' },
    { name: 'ma-ya', description: 'bison-bison' },
  ]);
};
