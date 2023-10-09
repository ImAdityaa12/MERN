const userController = require("../controller/users")
const express = require("express"); 
const routes = express.Router();

routes
  .get("/:id", userController.getUserbyId)
  .get("/", userController.getAllUser)
  .put("/:id", userController.updateUser)
  .post("", userController.createUser)
  .patch("/:id", userController.updateDetail)
  .delete("/:id", userController.deleteUser);

exports.routes =  routes