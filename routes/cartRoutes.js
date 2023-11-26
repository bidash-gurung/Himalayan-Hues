const express = require('express')
const cartController = require('./../controllers/cartController.js')
const authController = require('./../controllers/authController.js')
const router = express.Router()

 


router  
    .route('/')   //giving file path 
    .get(cartController.getAllCart)   //
    .post(cartController.createCart)
 
router
    .route('/:id') //redirect cartcontroller
    .get(cartController.getCart)
    .patch(cartController.updateCart)
    .delete(cartController.deleteCart)

module.exports = router 