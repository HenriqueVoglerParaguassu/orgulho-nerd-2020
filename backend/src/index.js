const express = require('express')
const routes = require('./routes')

const server = express()

server
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/')
})