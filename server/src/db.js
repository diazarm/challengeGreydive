const { Sequelize, DataTypes } = require('sequelize');
const Response = require("../src/models/response")
const User = require("../src/models/users")
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false });

// Define los modelos y las relaciones
const models = {
  User: User.init(sequelize, DataTypes),
  Response: Response.init(sequelize, DataTypes),
};

// Define las asociaciones directamente en los modelos
User.associate(models);
Response.associate(models);

module.exports = {
    sequelize, models
};
