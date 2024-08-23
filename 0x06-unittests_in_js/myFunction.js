#!/usr/bin/node
export default function doubleNumber(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    return number * 2;
}
