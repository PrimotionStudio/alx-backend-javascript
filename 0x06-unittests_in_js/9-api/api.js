#!/usr/bin/node
const express = require("express");
const app = express();

if (require.main === module) {
  app.listen(7865, () => {
    console.log("API available on localhost port 7865");
  });
}

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
  const id = req.params.id;

  if (!isNaN(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send("Not Found");
  }
});

module.exports = app;
