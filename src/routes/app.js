const productRouter = require('./productRouter');

function routerApi(app) {
  app.use('/products', productRouter);
}

module.exports = routerApi
