'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const tabletopGames = require('./tabletopGames');
const videoGames = require('./videoGames');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const tabletopGamesModel = tabletopGames(sequelizeDatabase, DataTypes);
const videoGamesModel = videoGames(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  tabletopGamesModel,
  videoGamesModel,
};