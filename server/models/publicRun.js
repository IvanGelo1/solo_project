'use strict'

module.exports = (sequelize, DataTypes) => {
  const PublicRun = sequelize.define('PublicRun', {
    mapTrace: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pace: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  return PublicRun;
}