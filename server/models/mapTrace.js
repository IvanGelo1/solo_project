'use strict';

module.exports = (sequelize, DataTypes) => {
  const MapTrace = sequelize.define('MapTrace', {
    mapTrace: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  MapTrace.associate = model => {
    MapTrace.belongsTo(model.Run);
  };

  return MapTrace;
};