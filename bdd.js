const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'node'
});

connection.connect();

module.exports = connection