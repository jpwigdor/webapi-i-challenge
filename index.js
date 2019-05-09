// implement your API here

// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require("express");
const db = require("./data/db.js");

// creates an express application using the express module
const server = express();
server.use(express.json());

server.post("/api/users", (req, res) => {
  // stuff here
});

server.get("/api/users", (req, res) => {
  // stuff here
});

server.get("/api/users/:id", (req, res) => {
  // stuff here
});

server.delete("/api/users/:id", (req, res) => {
  // stuff here
});

server.put("/api/users/:id", (req, res) => {
  // stuff here
});

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log("API running on port 8000"));
