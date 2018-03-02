'use strict'

const http = require('http')
const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/', function (req, res, next) {
  res.send(`Hello world!`)
})

const server = http.createServer(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
