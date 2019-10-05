function OrderDAO(connection) {
  this._connection = connection;
}

OrderDAO.prototype.getOrders = function (callback) {
  this._connection.query(`
		SELECT * FROM tab_pedidos
	`, callback)
}

OrderDAO.prototype.postOrder = function (order, callback) {
  this._connection.query(`
		INSERT INTO tab_pedidos SET ?
	`, order, callback)
}

OrderDAO.prototype.putOrder = function (order_update, order_id, callback) {
  this._connection.query(`
    UPDATE tab_pedidos as P
    SET ?
    WHERE P.idPedido = ?
	`, [order_update, order_id], callback)
}

OrderDAO.prototype.deleteOrder = function (order_id, callback) {
  this._connection.query(`
    DELETE FROM tab_pedidos
    WHERE idPedido = ?
	`, order_id, callback)
}

module.exports = () => {
  return OrderDAO;
}
