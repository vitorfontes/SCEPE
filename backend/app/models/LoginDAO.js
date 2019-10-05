function OrderDAO(connection) {
  this._connection = connection;
}

OrderDAO.prototype.login = function (email, callback) {
  this._connection.query(`
    SELECT * FROM tab_usuarios AS U
    WHERE U.email = ?
	`, [email], callback)
}

module.exports = () => {
  return OrderDAO;
}
