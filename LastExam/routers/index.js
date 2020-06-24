const express = require('express')
const index = require('../controllers/HomeController')

let router = express.Router()

router.get('/', index.index)


module.exports = router