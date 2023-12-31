const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
  sequelize.define('Response', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.STRING,
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
  },{timestamps: false});
}



