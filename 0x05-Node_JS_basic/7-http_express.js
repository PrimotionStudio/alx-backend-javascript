#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;

const path = process.argv.length === 3 ? process.argv[2] : '';
const app = express();
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (_, res) => {
  let response = 'This is the list of our students\n';
  fs.readFile(path, { encoding: 'utf-8' })
    .then((content) => {
      const cs = [];
      const swe = [];
      const students = content.split('\n').filter((s) => s.trim());
      students.splice(0, 1);
      students.forEach((student) => {
        const stud = student.split(',');
        if (stud[3] === 'CS') {
          cs.push(stud[0]);
        } else if (stud[3] === 'SWE') {
          swe.push(stud[0]);
        }
      });
      response += `Number of students: ${cs.length + swe.length}\n`;
      response += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
      response += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
      res.send(response);
    })
    .catch(() => {
      res.write('Cannot load the database');
      res.end();
    });
});
app.listen(1245);
module.exports = app;
