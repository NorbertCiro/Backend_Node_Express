const { faker } = require('@faker-js/faker'); // Libreria para poblar de datos falsos la app
// Clase de la entidad donde se define la logica de negocio para
// esa entidad en particular
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  // En este caso se crea un metodo para generar los datos falsos
  //  con fines practicos para desarrollo
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.internet.userName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.avatar(),
        id: faker.string.uuid(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((item) => item.id === id);
  }
  update(id, data) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[indexProduct];
    this.products[indexProduct] = {
      ...product,
      ...data,
    };
    return this.products[indexProduct];
  }
  delete(id) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(indexProduct, 1);
    return { id };
  }
}

module.exports = ProductsService;
