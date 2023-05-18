'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorMessage = require('./error-handlers/500');

// routes
const tabletopGamesRouter = require('./routes/tabletopGames');
const videoGamesRouter = require('./routes/videoGames');

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// CRUD
app.use(tabletopGamesRouter);
app.use(videoGamesRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Server is alive!!!');
});

// error handling
app.use('*', notFound);
app.use(errorMessage);


const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };