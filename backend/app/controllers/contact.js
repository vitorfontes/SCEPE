module.exports.getContacts = (application, req, res) => {

  var connection = application.config.dbConnection;
  var ContactDAO = new application.app.models.ContactDAO(connection);

  ContactDAO.getContacts((error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.postContact = (application, req, res) => {

  let contact = req.body

  var connection = application.config.dbConnection;
  var ContactDAO = new application.app.models.ContactDAO(connection);

  ContactDAO.postContact(contact, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.putContact = (application, req, res) => {

  let contact_update = req.body
  let contact_id = req.params.contact_id

  var connection = application.config.dbConnection;
  var ContactDAO = new application.app.models.ContactDAO(connection);

  ContactDAO.putContact(contact_update, contact_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.deleteContact = (application, req, res) => {

  let contact_id = req.params.contact_id

  var connection = application.config.dbConnection;
  var ContactDAO = new application.app.models.ContactDAO(connection);

  ContactDAO.deleteContact(contact_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

