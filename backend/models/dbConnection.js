const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'gustavo',
    password: '12345qwe',
    database: 'soft_clients',
};

const data = mysql.createPool(config);

module.exports = data;
