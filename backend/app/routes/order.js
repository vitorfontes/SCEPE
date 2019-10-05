module.exports = (application) => {
  application.get('/order', (req, res) => {
    application.app.controllers.order.getOrders(application, req, res);
  });

  application.post('/order', (req, res) => {
    application.app.controllers.order.postOrder(application, req, res);
  });

  application.put('/order/:order_id', (req, res) => {
    application.app.controllers.order.putOrder(application, req, res);
  });

  application.delete('/order/:order_id', (req, res) => {
    application.app.controllers.order.deleteOrder(application, req, res);
  });
}
