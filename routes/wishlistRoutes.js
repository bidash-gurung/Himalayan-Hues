const express = require('express')
const wishlistController = require('./../controllers/wishlistController.js')
const authController = require('./../controllers/authController.js')
const router = express.Router()

 


router  
    .route('/')   //giving file path 
    .get(wishlistController.getAllWishlist)   //
    .post(wishlistController.createWishlist)
 
router
    .route('/:id') //redirect Wishlistcontroller
    .get(wishlistController.getWishlist)
    .patch(wishlistController.updateWishlist)
    .delete(wishlistController.deleteWishlist)

module.exports = router 