// implement your API here

// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require("express");
const db = require("./data/db.js");

// creates an express application using the express module
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to WebAPI Challenge I!!");
});

server.post("/api/users", (req, res) => {
  const { name, bio, created_at, updated_at } = req.body;

  db.insert({
    name,
    bio,
    created_at,
    updated_at
  })
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(allUsers => {
      res.json(allUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

server.get("/api/users/:id", (req, res) => {
  // stuff here
});

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(removedUser => {
      res.json(removedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

server.put("/api/users/:id", (req, res) => {
  // stuff here
});

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(7000, () => console.log("API running on port 7000"));
