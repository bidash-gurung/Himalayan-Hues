const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    product_name : {
        type: String,
        required: [true, "Please provide a product title!"],
    },

    price:{
        type: String,
        required: [true, "Please provide a product price!"],
    },

    product_id :{
        type : String,
    },

    

    // the onw who added the product(seller)
    user_id : {
        type :String,
    },

    // the one who added to cart (buyer)
    user :{
        type:String,
    },
  
    
})

 

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;