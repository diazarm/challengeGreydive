const express = require("express");
const router = require("./routes/surveyRoutes"); 
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router); // Usa el enrutador principal

module.exports = server;
