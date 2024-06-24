#!/usr/bin/node
export default function iterateThroughObject(reportWithIterator) {
  let returnStr = '';
  let x = 0;
  for (const emp of reportWithIterator) {
    if (x !== 0) {
      returnStr += ' | ';
    }
    returnStr += emp;
    x = 1;
  }
  return returnStr;
}
