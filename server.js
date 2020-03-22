let express = require('express')
, app = express()
, port = 8080

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css')
})

app.get('/app.js', (req, res) => {
  res.sendFile(__dirname + '/public/app.js')
})

app.get('/navcenter.svg', (req,res) => {
  res.sendFile(__dirname + '/images/navcenter.svg')
})


app.listen(port, () => {
  console.log('listening on port :', port)
})
