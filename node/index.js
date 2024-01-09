const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});

const names = [
    'John',
    'Jane',
    'Michael',
    'Emily',
    'David',
    'Olivia',
    'Daniel',
    'Sophia',
    'Matthew',
    'Isabella',
    'Andrew',
    'Mia',
    'William',
    'Charlotte',
    'Joseph',
    'Amelia',
    'James',
    'Harper',
    'Benjamin',
    'Evelyn'
];

function insertRandomName() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const query = `INSERT INTO people (name) VALUES ('${randomName}')`;
    connection.query(query, (error, result) => {
        if (error) {
            console.error('Error inserting name:', error);
        } else {
            console.log('Name inserted successfully:', randomName, 'with ID:', result.insertId);
        }
    });
}

app.get('/', (req, res) => {
    insertRandomName();
    const query = 'SELECT id, name FROM people';
    connection.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th></tr>';
        results.forEach((result) => {
            table += `<tr><td style="padding: 5px; border: 1px solid black;">${result.id}</td><td style="padding: 5px; border: 1px solid black;">${result.name}</td></tr>`;
        });
        table += '</table>';
        res.send('<center><h1>Full Cycle Rocks!</h1>' + table + '</center>');
    });
});
