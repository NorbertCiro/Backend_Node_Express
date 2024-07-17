const express = require('express');
const { faker } = require('@faker-js/faker'); //Libreria de faker

const router = express.Router();

// Generamos una instancia del metodo Router para crear un modulo de enrutamiento
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      rice: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    });
  }
  //Generamos la respuesta al cliente
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'partial update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    message: 'delete',
    id,
  });
});


module.exports = router;
