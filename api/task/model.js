// build your `Task` model here
const db = require('../../data/dbConfig.js');

function find() {
  return db('tasks').then((tasks) => {
    tasks.map((task) => ({
      ...task,
      task_completed: task.task_completed ? true : false,
    }));
  });
}

function findById(id) {
  return db('tasks')
    .where({ task_id: id })
    .first()
    .then((task) => ({
      ...task,
      task_completed: task.task_completed ? true : false,
    }));
}

function create(task) {
  return db('tasks')
    .insert(task)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = {
  find,
  findById,
  create,
};
