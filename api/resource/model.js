// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
  return db('resources');
}

function findById(id) {
  return db('resources').where({ resource_id: id }).first();
}

function create(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = {
  find,
  findById,
  create,
};
