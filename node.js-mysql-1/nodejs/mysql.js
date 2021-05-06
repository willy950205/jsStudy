const mysql = require('mysql');

const connection  = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'thing9000',
    database:'dbpractice'
});

connection.connect();

connection.query('SELECT * FROM topic',  (err, results, fields) => {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

connection.end();