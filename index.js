'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/models/index');
const { start } = require('./src/server');

const PORT = process.env.PORT || 3002;
const POSTGRES_URI = process.env.DATABASE_URL;

sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection is working!');
    start(PORT);
  })
  .catch(e => console.error(e));