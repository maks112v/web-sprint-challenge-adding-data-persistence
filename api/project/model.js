const db = require('../../data/dbConfig');

function find() {
  return db('projects').then((projects) => {
    return projects.map((project) => ({
      ...project,
      project_completed: project.project_completed ? true : false,
    }));
  });
}

function findById(id) {
  return db('projects')
    .where({ project_id: id })
    .first()
    .then((project) => ({
      ...project,
      project_completed: project.project_completed ? true : false,
    }));
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
