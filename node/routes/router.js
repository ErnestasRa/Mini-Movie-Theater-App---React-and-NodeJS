const express = require('express')
const router = express.Router()

const controller = require('../controllers/main-controller')

router.get('/spiderman/', controller.spiderman)
router.get('/ironman/', controller.ironman)
router.get('/blackpanther/', controller.blackpanther)
router.get('/movies/', controller.movies)
router.post('/reservations/', controller.reservations)


module.exports = router