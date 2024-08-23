#!/usr/bin/node
// utils.js
const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case "SUM":
      return roundedA + roundedB;
    case "SUBTRACT":
      return roundedA - roundedB;
    case "DIVIDE":
      return roundedB === 0 ? "Error" : roundedA / roundedB;
    default:
      return undefined;
  }
};

const Utils = {
  calculateNumber,
};

module.exports = Utils;
