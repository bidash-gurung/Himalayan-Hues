const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    feedback : {
        type: String,
        required: [true, "Please provide a Feedback!"],
    },

    user_id : {
        type :String,   
    }
    
})

 

const Feedback  = mongoose.model("feedabck", feedbackSchema);
module.exports = Feedback;