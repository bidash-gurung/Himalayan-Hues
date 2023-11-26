const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
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

    stock:{
        type :String,
        default:'In stock'
    }
    
})

 

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;