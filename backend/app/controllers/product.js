module.exports.getProductsCatalog = (application, req, res) => {

  var connection = application.config.dbConnection;
  var ProductDAO = new application.app.models.ProductDAO(connection);

  ProductDAO.getProductsCatalog((error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.postProductCatalog = (application, req, res) => {

  let product_catalog = req.body

  var connection = application.config.dbConnection;
  var ProductDAO = new application.app.models.ProductDAO(connection);

  ProductDAO.postProductCatalog(product_catalog, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.putProductCatalog = (application, req, res) => {

  let product_catalog_update = req.body
  let product_catalog_id = req.params.product_catalog_id

  var connection = application.config.dbConnection;
  var ProductDAO = new application.app.models.ProductDAO(connection);

  ProductDAO.putProductCatalog(product_catalog_update, product_catalog_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

module.exports.deleteProductCatalog = (application, req, res) => {

  let product_catalog_id = req.params.product_catalog_id

  var connection = application.config.dbConnection;
  var ProductDAO = new application.app.models.ProductDAO(connection);

  ProductDAO.deleteProductCatalog(product_catalog_id, (error, results) => {
    if (error) throw error
    return res.send(results)
  });
}

