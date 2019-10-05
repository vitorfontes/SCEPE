module.exports = (application) => {
  application.get('/inventory', (req, res) => {
    application.app.controllers.inventory.getInvetoryControl(application, req, res);
  });

  application.post('/inventory', (req, res) => {
    application.app.controllers.inventory.postInventoryControl(application, req, res);
  });

  application.put('/inventory/:inventory_id', (req, res) => {
    application.app.controllers.inventory.putInventoryControl(application, req, res);
  });

  application.delete('/inventory/:inventory_id', (req, res) => {
    application.app.controllers.inventory.deleteInventoryControl(application, req, res);
  });
}
