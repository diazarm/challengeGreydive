const express = require("express");
const morgan = require("morgan");
const router = require("./routes/surveyRoutes"); 
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router); // Usa el enrutador principal

module.exports = server;
