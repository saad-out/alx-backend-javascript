const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1);

    let numberOfStudents = 0;
    const fields = {};
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i] !== '') {
        numberOfStudents += 1;
        const row = lines[i].split(',');
        const firstName = row[0];
        const field = row[3];
        if (field in fields) {
          fields[field].count += 1;
          fields[field].names.push(firstName);
        } else {
          fields[field] = {
            count: 1,
            names: [firstName],
          };
        }
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;