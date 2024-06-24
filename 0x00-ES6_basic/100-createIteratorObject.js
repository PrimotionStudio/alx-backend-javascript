#!/usr/bin/node
export default function createIteratorObject(report) {
  const emp = [];
  for (const dep in report.allEmployees) {
    emp.push(...report.allEmployees[dep]);
  }
  return emp;
}
