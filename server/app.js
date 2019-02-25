import express from 'express';
var app = express();

// Middleware
require('./config/express')(app);

// Routing
require('./config/routes')(app);

// Errors
require('./config/errors')(app);

module.exports = app;
