const express = require('express');
// const { faker } = require('@faker-js/faker'); //Libreria de faker
const ProductsService = require('../services/products.service');


const router = express.Router();
const service = new ProductsService();
// Generamos una instancia del metodo Router para crear un modulo de enrutamiento
router.get('/', async (_req, res) => {
  try {
    const products = await service.find();
    //Generamos la respuesta al cliente
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while fetching the products.',
      error: error.message,
    });
  }
});

// Recuperar un producto en especifico
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.findOne(id);
    // Respuesta al cliente del producto
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: 'Prodcut ID not found',
      error: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const newProduct = await service.create(body);

    res.status(201).json({
      message: 'created',
      data: newProduct,
    });
  } catch (error) {
    res.status(505).json({
      message: 'Error creating product',
      error: error.message,
    });
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);
    res.status(200).json({
      message: 'update',
      data: product,
      id,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.delete(id);
    // Si no se encuentra el producto, retornar un error 404
    if(!product) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    // Si se encuentra y elimina correctamente, responder con un estado 204
    res.status(204).json({
      message: 'delete',
      id: product.id,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete product',
      error: error.message,
    });
  }
});


module.exports = router;
