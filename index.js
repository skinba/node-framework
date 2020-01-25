const winston = require('winston');
const multer = require('multer');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();


const port = process.env.PORT || 5000;

const server = app.listen(port,() => winston.info(`Listening the port ${port}...`));

module.exports = server;
