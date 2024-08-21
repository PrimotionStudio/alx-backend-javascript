#!/usr/bin/node
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    const dbPath = process.argv.length === 3 ? process.argv[2] : '';
    try {
      const dbData = await readDatabase(dbPath);
      let response = 'This is the list of our students\n';
      Object
        .keys(dbData)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .forEach((field) => {
          response += `Number of students in ${field}: ${dbData[field].length}. List: ${dbData[field].join(', ')}\n`;
        });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = process.argv.length === 3 ? process.argv[2] : '';
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(dbPath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
