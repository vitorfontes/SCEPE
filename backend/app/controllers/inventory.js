module.exports.getInvetoryControl = (application, req, res) => {

  var connection = application.config.dbConnection;
  var InventoryDAO = new application.app.models.InventoryDAO(connection);

  InventoryDAO.getInvetoryControl((error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.postInventoryControl = (application, req, res) => {

  let inventory = req.body

  var connection = application.config.dbConnection;
  var InventoryDAO = new application.app.models.InventoryDAO(connection);

  InventoryDAO.postInventoryControl(inventory, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.putInventoryControl = (application, req, res) => {

  let inventory_update = req.body
  let inventory_id = req.params.inventory_id

  var connection = application.config.dbConnection;
  var InventoryDAO = new application.app.models.InventoryDAO(connection);

  InventoryDAO.putInventoryControl(inventory_update, inventory_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.deleteInventoryControl = (application, req, res) => {

  let inventory_id = req.params.inventory_id

  var connection = application.config.dbConnection;
  var InventoryDAO = new application.app.models.InventoryDAO(connection);

  InventoryDAO.deleteInventoryControl(inventory_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

