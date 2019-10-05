module.exports = (application) => {
  application.get('/contacts', (req, res) => {
    application.app.controllers.contact.getContacts(application, req, res);
  });

  application.post('/contacts', (req, res) => {
    application.app.controllers.contact.postContact(application, req, res);
  });

  application.put('/contacts/:contact_id', (req, res) => {
    application.app.controllers.contact.putContact(application, req, res);
  });

  application.delete('/contacts/:contact_id', (req, res) => {
    application.app.controllers.contact.deleteContact(application, req, res);
  });
}
