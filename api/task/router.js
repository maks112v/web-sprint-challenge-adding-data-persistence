// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.task_description) {
      res.status(400).json({
        message: 'Please provide a task description and notes',
      });
    } else {
      const newTask = await Task.create(req.body);
      res.status(201).json(newTask);
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error adding task',
    });
  }
});

module.exports = router;
