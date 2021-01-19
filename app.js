const compression = require('compression')
const express = require('express')
const app = express()
const port = 3000

var ipTable = {};
app.use(compression())
app.get('/', (req, res) => {
  let ip = req.ip
  let now = Date.now()

  if(ipTable[ip]){
    let i = 0;
    while(i < ipTable[ip].length && now - ipTable[ip][i] >= 60000){
      i++
    }
    ipTable[ip].splice(0,i)
    ipTable[ip].push(now)
  }
  else{
    ipTable[ip] = [now]
  }

  if(ipTable[ip].length > 60)
    res.send(`Error`)
  else
    res.send(`${ipTable[ip].length}`)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
module.exports = app
