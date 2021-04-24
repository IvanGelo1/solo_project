'use strict';

module.exports = (sequelize, DataTypes) => {
  const Run = sequelize.define('Run', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    distance: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    elevationGain: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    elevationLoss: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    timeStarted: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    duration: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    avgPace: {
      allowNull:false,
      type: DataTypes.FLOAT
    }
  });

  Run.associate = model => {
    Run.hasMany(model.MapTrace);
  };

  return Run;
}

// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Run extends Model {
//         /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//          static associate(models) {
//           Run.hasMany(models.)
//         }
//   };
//   Run.init({
//     uuid: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4
//     },
//     distance: {
//       allowNull: false,
//       type: DataTypes.FLOAT,
//     },
//     elevationGain: {
//       // allowNull: false,
//       type: DataTypes.FLOAT,
//     },
//     elevationLoss: {
//       // allowNull: false,
//       type: DataTypes.FLOAT,
//     },
//     timeStarted: {
//       // allowNull: false,
//       type: DataTypes.DATE,
//     },
//     timeFinished: {
//       // allowNull: false,
//       type: DataTypes.DATE,
//     },
//     duration: {
//       allowNull: false,
//       type: DataTypes.FLOAT
//     },
//     avgPace: {
//       allowNull:false,
//       type: DataTypes.FLOAT
//     }
//   }, {
//     sequelize,
//     tableName: 'runs',
//     modelName: 'Run'
//   });
//   return Run;
// };
