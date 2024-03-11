const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'clash_of_clans',
    password: '',
});

module.exports = pool.promise();