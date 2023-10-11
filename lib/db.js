let mysql = require("mysql2");

let dbConn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistem_informasi_mahasiswa'
});

module.exports = dbConn.promise();