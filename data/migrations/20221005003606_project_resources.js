/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('project_resources', (tbl) => {
    tbl.increments('project_resource_id');
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
