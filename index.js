const express = require('express')
const app = express()
const port = 3000

app.get('/', ( _req, res ) => {
  res.send('Servidor iniciado en express')
})

app.get('/products', ( _req, res ) => {
  res.json({
    name: 'Xiaomi 5G lite 11',
    price: 1000
  })

})

app.listen(port, () => {
  console.log( `El servidor esta corriendo en el puerto ${port}` )
})

