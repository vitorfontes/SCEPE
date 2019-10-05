module.exports.getOrders = (application, req, res) => {

  var connection = application.config.dbConnection;
  var OrderDAO = new application.app.models.OrderDAO(connection);

  OrderDAO.getOrders((error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.postOrder = (application, req, res) => {

  let order = req.body

  var connection = application.config.dbConnection;
  var OrderDAO = new application.app.models.OrderDAO(connection);

  OrderDAO.postOrder(order, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.putOrder = (application, req, res) => {

  let order_update = req.body
  let order_id = req.params.order_id

  var connection = application.config.dbConnection;
  var OrderDAO = new application.app.models.OrderDAO(connection);

  OrderDAO.putOrder(order_update, order_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.deleteOrder = (application, req, res) => {

  let order_id = req.params.order_id

  var connection = application.config.dbConnection;
  var OrderDAO = new application.app.models.OrderDAO(connection);

  OrderDAO.deleteOrder(order_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

