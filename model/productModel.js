const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  photo: {
    type: String,
    default:'default.jpg'
    // required: [true, "Please provide a photo"]
  },
  product_name: {
    type: String,
    required: [true, "Please provide a product title!"],
  },
  description: {
    type: String,
    required: [true, "Please provide a news description!"],
    minLength: [
      10,
      'A news description must have more or equal than 10 characters',
    ],
  },
  price: {
    type: String,
    required: [true, "Please provide a product price!"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide the quantity"]
  },
  bank: {
    type: String,
    required: [true, "Please Provide your account number"]
  },
  account: {
    type: String,
    required: [true, "Please provide an account Number!"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Ensure this matches the model name 'User' exactly
    // required: [true, 'Must be seller.'],
  }
});

// Adding foreign key
productSchema.pre('find', function (next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
