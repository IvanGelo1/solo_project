'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distance: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  })

  User.associate = model => {
    User.hasMany(model.Run)
  }

  return User
}
