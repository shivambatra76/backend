console.log("Starting Server!")
const express = require('express')
const config = require('config');
const app = express()
const port = config.get('server.port');

app.get('/status', (req, res) => {
  res.send('Server is Up and Running!')
})

app.listen(port, () => {
  console.log(`PortFolio Management app listening on port ${port}`)
})
