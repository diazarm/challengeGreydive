const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); 

const User = sequelize.define('User', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Otros campos del modelo de usuario, si los tienes
});


module.exports = User;
