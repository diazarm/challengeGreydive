const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); 

const Response = sequelize.define('Response', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  country_of_origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  terms_and_conditions: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Response;
