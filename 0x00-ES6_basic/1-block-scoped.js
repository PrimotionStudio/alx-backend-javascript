#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = task;
    var task2 = task2;
  }

  return [task, task2];
}
