const mysql = require('mysql')

const connMySQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eqix1998',
  database: 'scepe_db',
  port: 3306,
  multipleStatements: true
});

module.exports = () => {
  return connMySQL;
}
