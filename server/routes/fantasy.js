const express = require('express')
const router = express.Router()
//configure knex

const request = require('superagent')

router.get('/', (req, res) => {
  request
    //change this to knex?
    .get('http://www.nokeynoshade.party/api/queens/all')
    .then((response) => {
      res.json(response.body)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('err')
    })
})

module.exports = router
