'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const tabletopGames = require('./tabletopGames');
const videoGames = require('./videoGames');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const tabletopGamesModel = tabletopGames(sequelizeDatabase, DataTypes);
const videoGamesModel = videoGames(sequelizeDatabase, DataTypes);

// const released = sequelizeDatabase.define('released', {
//   videoGameReleased: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: videoGamesModel,
//       key: 'released',
//     },
//   },
//   tabletopGames: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: tabletopGamesModel,
//       key: 'released',
//     },
//   },
// });

videoGamesModel.belongsToMany(tabletopGamesModel, {through: 'released'});
tabletopGamesModel.belongsToMany(videoGamesModel, {through: 'released'});

module.exports = {
  sequelizeDatabase,
  tabletopGamesModel: new Collection(tabletopGamesModel),
  videoGamesModel: new Collection(videoGamesModel),
};