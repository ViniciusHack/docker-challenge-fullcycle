const express = require('express');
const app = express(); 

// mysql db connection
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysql_db',
  user: 'app',
  password: 'app',
  database: 'app',
});

const sql = `INSERT INTO people(name) VALUES('Vini')`;
connection.query(sql);

app.get('/', (req, res) => {
  connection.query('SELECT * FROM people', (err, result) => {
    if (err) throw err;

    const template = `
      <div>
        <h1>Full Cycle Rocks!</h1>
        <h2>Users:</h2>
        <ul>
          ${result.map(item => `<li>${item.name}</li>`).join('')}
        </ul>
      </div>
    `

    return res.send(template);
  });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})