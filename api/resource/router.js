const router = require('express').Router();
const Resource = require('./model');

router.get('/', async (req, res) => {
  const resources = await Resource.find()
  res.status(200).json(resources)
});

router.post('/', async (req, res) => {
  try {
    const createdResource = await Resource.create(req.body);

  res.status(201).json(createdResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
