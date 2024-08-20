#!/usr/bin/node
const express = require('express');

const app = express();
app.route('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;
