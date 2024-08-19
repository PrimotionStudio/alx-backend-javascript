#!/usr/bin/node
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n');
    const cs = [];
    const swe = [];
    students.splice(0, 1);
    students.forEach((student) => {
      const stud = student.split(',');
      if (stud[3] === 'CS') {
        cs.push(stud[0]);
      } else if (stud[3] === 'SWE') {
        swe.push(stud[0]);
      }
    });
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
};
module.exports = countStudents;
