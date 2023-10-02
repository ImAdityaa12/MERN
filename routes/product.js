const productController = require("../controller/product")
const express = require("express"); 
const routes = express.Router();


routes
  .get("/:id", productController.getProductbyId)
  .get("/", productController.getAllProduct)
  .put("/:id", productController.updateProduct)
  .post("", productController.createProduct)
  .patch("/:id", productController.updateDetail)
  .delete("/:id", productController.deleteProduct);

exports.routes =  routes