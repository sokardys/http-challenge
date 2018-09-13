const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.get('/acme-challenge/:hash', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.status(200).send(req.params.hash)
})

app.listen(port, () => {
  console.log(`http-challenge on port ${port}`)
})
