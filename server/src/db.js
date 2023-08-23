const { Sequelize, DataTypes } = require('sequelize');
const responseModels = require("../src/models/responseModels")
const usersModels = require("../src/models/usersModels")
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

 //const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false});
 
 const sequelize = new Sequelize('postgres://postgres:Mm48536804@localhost:5432/encuesta',{logging:false});

 // Define los modelos y las relaciones
usersModels(sequelize);
responseModels(sequelize);
// Define las asociaciones directamente en los modelos
const {User, Response} = sequelize.models;

User.hasMany(Response);
Response.belongsTo(User);

module.exports={sequelize, ...sequelize.models};
