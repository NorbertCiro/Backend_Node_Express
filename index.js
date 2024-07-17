const express = require('express')
const app = express()
const port = 3000
 
app.get('/', ( _req, res ) => {
  res.send('Servidor iniciado en express')
})

app.listen(port, () => {
  console.log( 'Mi port ' + port )
})