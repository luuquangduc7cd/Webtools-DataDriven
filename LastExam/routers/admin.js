const express = require('express')
const admin = require('../controllers/AdminController')

let router = express.Router()

router.get('/', admin.index)


module.exports = router