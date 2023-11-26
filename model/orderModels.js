const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    product_name : {
        type: String,
     },

    total_amount:{
        type: String,
     },

    total_qty:{
        type : String,
    },

    buyer : {
        type :String,
    },

    journal :{
        type:String,
    },

    phoneNo: {
        type:String,
    },

    address:{
        type:String,
    },

    seller_id:{
        type:String,
    }
  
    
})

 

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;