module.exports = (application) => {
  application.post('/login', (req, res) => {
    application.app.controllers.login.login(application, req, res);
  });
}
