#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sum of 2 ints', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('sum of 2 float', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('sum of 2 lower floats', () => {
    assert.strictEqual(calculateNumber(1.1, 2.1), 3);
  });

  it('sum of 2 higher floats', () => {
    assert.strictEqual(calculateNumber(1.6, 2.6), 5);
  });

});