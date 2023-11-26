const express = require('express')
const orderController = require('./../controllers/orderController.js')
const authController = require('./../controllers/authController.js')
const router = express.Router()

 


router  
    .route('/')   //giving file path 
    .get(orderController.getAllOrder)   //
    .post(orderController.createOrder)
 
router
    .route('/:id') //redirect ordercontroller
    .get(orderController.getOrder)
    .patch(orderController.updateOrder)
    .delete(orderController.deleteOrder)

module.exports = router 