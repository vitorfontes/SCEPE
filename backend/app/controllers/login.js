module.exports.login = (application, req, res) => {

  let loginInfo = req.body
  let email = loginInfo.email
  let senha = loginInfo.senha

  var connection = application.config.dbConnection;
  var LoginDAO = new application.app.models.LoginDAO(connection);

  LoginDAO.login(email, (error, results) => {
    if (error) throw error

    if (results.length == 0) {
      return res.send({ auth: false, message: 'Usuário não existe' })
    }

    if (results[0].senha === senha) {
      return res.send({ auth: true, permission: results[0].permission })
    } else {
      return res.send({ auth: false, message: 'Senha Incorreta' })
    }
  });
}
