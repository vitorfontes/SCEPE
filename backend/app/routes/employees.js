module.exports = (application) => {
  application.get('/employees', (req, res) => {
    application.app.controllers.employees.getEmployees(application, req, res);
  });

  application.post('/employees', (req, res) => {
    application.app.controllers.employees.postEmployee(application, req, res);
  });

  application.put('/employees/:employee_id', (req, res) => {
    application.app.controllers.employees.putEmployee(application, req, res);
  });

  application.delete('/employees/:employee_id', (req, res) => {
    application.app.controllers.employees.deleteEmployee(application, req, res);
  });
}
