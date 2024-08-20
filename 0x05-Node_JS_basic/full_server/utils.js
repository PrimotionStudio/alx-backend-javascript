#!/usr/bin/node
import fs from 'fs/promises';

export async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    const fields = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
