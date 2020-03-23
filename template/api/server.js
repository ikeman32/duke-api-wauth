const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//route to endpoint routers
const configureRoutes = require("../route.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

configureRoutes(server);

server.get("/", (req, res) => {
  res.send("The Server is working ");
});

module.exports = server;