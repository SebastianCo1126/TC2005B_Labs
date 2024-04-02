const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'labs',
    password: 'G_krovi/MK3',
});

module.exports = pool.promise();