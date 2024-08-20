#!/usr/bin/node
const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const path = process.argv.length === 3 ? process.argv[2] : '';
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-type': 'text/plain' });
  if (reqUrl === '/') {
    res.write('Hello Holberton School!\n');
    res.end();
  } else if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
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
        res.write(`Number of students: ${cs.length + swe.length}\n`);
        res.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
        res.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}\n`);
        res.end();
      })
      .catch((err) => {
        res.write('Cannot load the database\n');
        res.write(`${err}\n`);
        res.end();
      });
  } else {
    res.end();
  }
}).listen(1245);
module.exports = app;
