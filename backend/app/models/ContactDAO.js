function ContactDAO(connection) {
  this._connection = connection;
}

ContactDAO.prototype.getContacts = function (callback) {
  this._connection.query(`
		SELECT * FROM tab_contatos
	`, callback)
}

ContactDAO.prototype.postContact = function (employee, callback) {
  this._connection.query(`
		INSERT INTO tab_contatos SET ?
	`, employee, callback)
}

ContactDAO.prototype.putContact = function (contact_update, contact_id, callback) {
  this._connection.query(`
    UPDATE tab_contatos as C
    SET ?
    WHERE C.idContato = ?
	`, [contact_update, contact_id], callback)
}

ContactDAO.prototype.deleteContact = function (contact_id, callback) {
  this._connection.query(`
    DELETE FROM tab_contatos
    WHERE idContato = ?
	`, contact_id, callback)
}

module.exports = () => {
  return ContactDAO;
}
