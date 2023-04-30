// index.js
const express = require('express')
const { google } = require('googleapis')
const { reseller } = require('googleapis/build/src/apis/reseller')

const app = express()
const PORT = 4000

app.use(express.json())

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', async (req, res) => {
  res.send('Hey this is my API running 🚀🚀')
  
  const auth = new google.auth.GoogleAuth({
    keyFile: './files/credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  })

  const client = await auth.getClient()

  const googleSheets = google.sheets({version: 'v4', auth: client})

  const spreadsheetId = '1KL10-5shnLdg53A9lizK49N95xFK0Xamye4O3GCMouw'

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  })

  res.send(metaData)
})

app.post('/webhook', (req, res) => {
  console.log(req.body)
  res.send('Shopify request received...')
})

// Export the Express API
module.exports = app