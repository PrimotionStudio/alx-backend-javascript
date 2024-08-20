#!/usr/bin/node
const fs = require('fs').promises;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf-8' })
    .then((content) => {
      const cs = [];
      const swe = [];
      const students = content.split('\n');
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
      resolve();
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});
module.exports = countStudents;
