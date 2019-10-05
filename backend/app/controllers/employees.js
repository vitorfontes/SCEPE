module.exports.getEmployees = (application, req, res) => {

  var connection = application.config.dbConnection;
  var EmployeesDAO = new application.app.models.EmployeesDAO(connection);

  EmployeesDAO.getEmployees((error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.postEmployee = (application, req, res) => {

  let employee = req.body

  var connection = application.config.dbConnection;
  var EmployeesDAO = new application.app.models.EmployeesDAO(connection);

  EmployeesDAO.postEmployee(employee, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.putEmployee = (application, req, res) => {

  let employee_update = req.body
  let employee_id = req.params.employee_id

  var connection = application.config.dbConnection;
  var EmployeesDAO = new application.app.models.EmployeesDAO(connection);

  EmployeesDAO.putEmployee(employee_update, employee_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.deleteEmployee = (application, req, res) => {

  let employee_id = req.params.employee_id

  var connection = application.config.dbConnection;
  var EmployeesDAO = new application.app.models.EmployeesDAO(connection);

  EmployeesDAO.deleteEmployee(employee_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

