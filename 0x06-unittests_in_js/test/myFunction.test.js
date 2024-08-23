const {expect} = require('chai');
const doubleNumber = require('../myFunction');

describe('doubleNumber', function() {
    it('should include double the input number', function() {
        const number = 4;
        const output = doubleNumber(number);
        expect(output).to.equal(8);
    });
    it('should throw an error if the number is not a number', function() {
        const badInput = 'not a number';
        expect(() => doubleNumber(badInput)).to.throw('Input must be a number');
    });
})