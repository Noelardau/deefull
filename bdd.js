const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'deefull.000webhostapp.com',
    user: 'id17248895_root',
    password : 'General crew 92i',
    database : 'id17248895_test'
});

connection.connect();

module.exports = connection
