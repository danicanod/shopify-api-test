// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.use(express.json())

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🚀🚀')
})

app.post('/notifications', (req, res) => {
  console.log(req.body)
  res.send('Shopify request received...')
})

// Export the Express API
module.exports = app