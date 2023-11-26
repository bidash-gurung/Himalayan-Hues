const express = require('express')
const router = express.Router()
const viewsController = require('./../controllers/viewController')
const authController = require('./../controllers/authController')

router.get('/', viewsController.getHome)

router.get('/login', viewsController.getLogin)
router.get('/signup', viewsController.getSignupForm)

router.get('/sellerhome', viewsController.getSellerHome)
router.get('/addProduct', viewsController.getAddProduct)


module.exports = router