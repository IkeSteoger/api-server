'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('tabletopGames', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    typeOfGame: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};