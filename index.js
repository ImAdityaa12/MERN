const productController = require("./controller/product")

const express = require('express')
const server = express()
server.use(express.json())

//GET
server.get("/products/:id", productController.getProductbyId)
server.get("/products", productController.getAllProduct)
//PUT
server.put("/products/:id",productController.updateProduct )
//POST
server.post("/products",productController.createProduct)
//patch
server.patch("/products/:id", productController.updateDetail)
//Delete
server.delete("/products/:id", productController.deleteProduct)



server.listen(8080, ()=>{
    console.log("server started");
})