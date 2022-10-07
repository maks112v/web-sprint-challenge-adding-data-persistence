const router = require('express').Router();

const Project = require('./model');

router.get('/', async (req, res) => {
  const projects = await Project.find();
  
  res.status(200).json(projects);
});

router.post('/', async (req, res) => {
  if (!req.body.project_name) {
    res.status(400).json({
      message: 'Please provide a project name and description',
    });
  } else {
    const newProject = await Project.create(req.body);

    res.status(201).json(newProject);
  }
});

module.exports = router;
