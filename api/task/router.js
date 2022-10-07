// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
})

router.post('/', async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json(newTask);
})

module.exports = router;