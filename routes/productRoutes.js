const express = require("express")
const productsController = require("./../controllers/productController")
const authController = require("./../controllers/authController")
const router = express.Router();

router.post("/navigate", authController.navigate)
router.route("/")
    .get(productsController.getAllProducts)
    .post(productsController.uploadProductPhoto, productsController.createProduct)
router.route("/:id").get(productsController.getProductById).put(productsController.updateProduct).delete(productsController.deleteProduct);

module.exports = router
