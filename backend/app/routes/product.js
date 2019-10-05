module.exports = (application) => {
  application.get('/product-catalog', (req, res) => {
    application.app.controllers.product.getProductsCatalog(application, req, res);
  });

  application.post('/product-catalog', (req, res) => {
    application.app.controllers.product.postProductCatalog(application, req, res);
  });

  application.put('/product-catalog/:product_catalog_id', (req, res) => {
    application.app.controllers.product.putProductCatalog(application, req, res);
  });

  application.delete('/product-catalog/:product_catalog_id', (req, res) => {
    application.app.controllers.product.deleteProductCatalog(application, req, res);
  });
}
