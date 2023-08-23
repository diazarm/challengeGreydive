const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
  sequelize.define('User', {
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
  }, {timestamps: false});
}




