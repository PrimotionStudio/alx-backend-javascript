#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    if (task === task2) {
      console.log();
    }
  }

  return [task, task2];
}
