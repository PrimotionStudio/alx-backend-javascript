// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  it('should correctly add rounded numbers for SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    assert.strictEqual(calculateNumber('SUM', -1.6, 1.6), 0);
  });

  it('should correctly subtract rounded numbers for SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 1.4), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -1.6), 0);
  });

  it('should correctly divide rounded numbers for DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, 2.2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', -7.6, -2.2), 3);
  });

  it('should return "Error" if dividing by zero', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => {
      calculateNumber('INVALID', 1.4, 4.5);
    }, /Invalid type/);
  });
});
