/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments('project_id');
    tbl.string('project_name', 128).notNullable();
    tbl.string('project_description', 128);
    tbl.boolean('project_completed').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
