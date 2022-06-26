const path = require('path')
const express = require('express')

const header = require('./routes/header')
const dragRace = require('./routes/dragRace')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/header', header)
server.use('/api/v1/queens', dragRace)

module.exports = server
