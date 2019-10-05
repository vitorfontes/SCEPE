function EmployeesDAO(connection) {
  this._connection = connection;
}

EmployeesDAO.prototype.getEmployees = function (callback) {
  this._connection.query(`
		SELECT * FROM tab_funcionarios
	`, callback)
}

EmployeesDAO.prototype.postEmployee = function (employee, callback) {
  this._connection.query(`
		INSERT INTO tab_funcionarios SET ?
	`, employee, callback)
}

EmployeesDAO.prototype.putEmployee = function (employee_update, employee_id, callback) {
  this._connection.query(`
    UPDATE tab_funcionarios as F
    SET ?
    WHERE F.idFuncionario = ?
	`, [employee_update, employee_id], callback)
}

EmployeesDAO.prototype.deleteEmployee = function (employee_id, callback) {
  this._connection.query(`
    DELETE FROM tab_funcionarios
    WHERE idFuncionario = ?
	`, employee_id, callback)
}

module.exports = () => {
  return EmployeesDAO;
}
