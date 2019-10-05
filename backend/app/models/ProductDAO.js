function ProductDAO(connection) {
  this._connection = connection;
}

ProductDAO.prototype.getProductsCatalog = function (callback) {
  this._connection.query(`
		SELECT * FROM tab_produtos
	`, callback)
}

ProductDAO.prototype.postProductCatalog = function (order, callback) {
  this._connection.query(`
		INSERT INTO tab_produtos SET ?
	`, order, callback)
}

ProductDAO.prototype.putProductCatalog = function (order_update, order_id, callback) {
  this._connection.query(`
    UPDATE tab_produtos as P
    SET ?
    WHERE P.id = ?
	`, [order_update, order_id], callback)
}

ProductDAO.prototype.deleteProductCatalog = function (order_id, callback) {
  this._connection.query(`
    DELETE FROM tab_produtos
    WHERE id = ?
	`, order_id, callback)
}

module.exports = () => {
  return ProductDAO;
}
