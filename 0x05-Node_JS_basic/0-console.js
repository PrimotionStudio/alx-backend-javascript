#!/usr/bin/node
const displayMessage = (arg) => {
  process.stdout.write(`${arg}\n`);
};

module.exports = displayMessage;
