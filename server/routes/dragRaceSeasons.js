const express = require('express')
const router = express.Router()

const request = require('superagent')

router.get('/', (req, res) => {
  request
    .get('http://www.nokeynoshade.party/api/seasons')
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
