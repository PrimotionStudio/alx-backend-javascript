#!/usr/bin/node
const express = require("express");
const app = express();

app.use(express.json());

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

app.get("/available_payments", (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send("Bad Request");
  }
});

module.exports = app;
