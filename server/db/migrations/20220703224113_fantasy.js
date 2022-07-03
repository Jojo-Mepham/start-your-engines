const { schema } = require('webpack-dev-server')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('fantasy', function (table) {
    table.increments('id')
    table.timestamp('date_added').defaultTo(knex.fn.now())
    table.string('name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('fantasy')
}
