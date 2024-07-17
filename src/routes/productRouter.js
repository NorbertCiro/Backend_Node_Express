const express = require('express');
// const { faker } = require('@faker-js/faker'); //Libreria de faker
const ProductsService = require('../services/products.service');


const router = express.Router();
const service = new ProductsService();
// Generamos una instancia del metodo Router para crear un modulo de enrutamiento
router.get('/', (_req, res) => {
  const products = service.find();
  //Generamos la respuesta al cliente
  res.json(products);
});

// Recuperar un producto en especifico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  // Respuesta al cliente del producto
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json({
    message: 'update',
    data: product,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.status(204).json({
    message: 'delete',
    id: product.id,
  });
});


module.exports = router;
