const path = require('path')
const express = require('express')

// const knexConfig = require('./db/knexfile')
// const knex = require('knex')(knexConfig)

const header = require('./routes/header')
const dragRace = require('./routes/dragRace')
const dragRaceSeasons = require('./routes/dragRaceSeasons')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/header', header)
server.use('/api/v1/queens', dragRace)
server.use('/api/v1/seasons', dragRaceSeasons)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

// * means literally anything
// get('*')
// will match /this and /also/this/thing, also matches /thing/:withparam /:param
//

module.exports = server
