var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'root',
    password : 'rootpassword',
    database : 'library'
});

module.exports = connection;