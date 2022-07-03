/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('fantasy').del()
  await knex('fantasy').insert([
    { id: 1, name: 'Sasha Velour' },
    { id: 2, name: 'Willow Pill' },
    { id: 3, name: 'Jinx Monsoon' },
  ])
}
