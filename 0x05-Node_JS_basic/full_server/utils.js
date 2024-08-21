#!/usr/bin/node
import fs from 'fs/promises';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((l) => l.trim() !== '');
    lines.splice(0, 1);
    const fields = {};
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname !== '' && lastname !== '' && age !== '' && field !== '') {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
