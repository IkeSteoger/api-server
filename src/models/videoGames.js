'use strict';

//I like vide game

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('videoGames', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genreOfGame: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};