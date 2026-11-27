const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api', routes);

app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.statusCode = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
