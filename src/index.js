const express = require('express');
const routerApi = require('./routes/app');
const app = express()
const port = 3000

routerApi(app)
app.use(express.json())
app.listen(port, () => {
  console.log( `El servidor esta corriendo en el puerto ${port}` )
})

