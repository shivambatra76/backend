const {logger} = require("./utils/logger");
const express = require('express');
const config = require('config');
const app = express()
const port = config.get('server.port');
const {jwtLib} = require("./utils/jwt");

app.use(express.json()); // to use json body parsing


app.get('/status', (req, res) => {
  res.send('Server is Up and Running!')
});

app.post('/login', async (req, res) => { 
  console.log(req.body);
  let jwtToken = await jwtLib.create(req.body).then(data=>data).catch(err=>{logger.error(err)});
  if (jwtToken){
    return res.status(200).json({data:jwtToken})
  }
  res.status(500).json({message:"Internal Server Error"});
});
app.post('/decode', async (req, res) => { 
  let jwtToken = await jwtLib.verify(req.body.token).then(data=>data).catch(err=>{logger.error(err)});
  if (jwtToken){
    return res.status(200).json({data:jwtToken})
  }
  res.status(500).json({message:"Internal Server Error"});
});
app.listen(port, () => {
  console.log(`PortFolio Management app listening on port ${port}`)
})
