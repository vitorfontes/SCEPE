function InventoryDAO(connection) {
  this._connection = connection;
}

InventoryDAO.prototype.getInvetoryControl = function (callback) {
  this._connection.query(`
		SELECT * FROM tab_controle_estoque
	`, callback)
}

InventoryDAO.prototype.postInventoryControl = function (order, callback) {
  this._connection.query(`
		INSERT INTO tab_controle_estoque SET ?
	`, order, callback)
}

InventoryDAO.prototype.putInventoryControl = function (order_update, order_id, callback) {
  this._connection.query(`
    UPDATE tab_controle_estoque as P
    SET ?
    WHERE P.idProduto = ?
	`, [order_update, order_id], callback)
}

InventoryDAO.prototype.deleteInventoryControl = function (order_id, callback) {
  this._connection.query(`
    DELETE FROM tab_controle_estoque
    WHERE idProduto = ?
	`, order_id, callback)
}

module.exports = () => {
  return InventoryDAO;
}
