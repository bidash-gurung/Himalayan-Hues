const express = require('express')
const feedbackController = require('./../controllers/feedbackController.js')
const authController = require('./../controllers/authController.js')
const router = express.Router()

 


router  
    .route('/')   //giving file path 
    .get(feedbackController.getAllFeedback)   //
    .post(feedbackController.createFeedback)
 
router
    .route('/:id') //redirect feedbackcontroller
    .get(feedbackController.getFeedback)
    .patch(feedbackController.updateFeedback)
    .delete(feedbackController.deleteFeedback)

module.exports = router 