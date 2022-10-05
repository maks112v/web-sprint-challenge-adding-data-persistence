const express = require('express');

const ResourceRouter = require('./resource/router');
const ProjectRouter = require('./project/router');

const server = express();

server.use(express.json());
server.use('/api/resource', ResourceRouter);
server.use('/api/projects', ProjectRouter);

module.exports = server;