#!/usr/bin/node
export default function divideFunction(numerator, denominator) {
  if (parseInt(denominator, 10) === 0) {
    throw new Error('cannot divide by 0');
  }
  return parseInt(numerator, 10) / parseInt(denominator, 10);
}
