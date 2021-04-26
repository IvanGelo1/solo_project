'use strict'

module.exports = (sequelize, DataTypes) => {
  const Run = sequelize.define('Run', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    distance: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    elevationGain: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    elevationLoss: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    timeStarted: {
      allowNull: false,
      type: DataTypes.DATE
    },
    duration: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    avgPace: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  })

  Run.associate = model => {
    Run.belongsTo(model.User)
    Run.hasMany(model.MapTrace)
  }

  return Run
}
