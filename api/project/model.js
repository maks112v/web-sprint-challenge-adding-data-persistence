const db = require('../../data/dbConfig');

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ project_id: id }).first();
}

function create(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = {
  find,
  findById,
  create,
};
