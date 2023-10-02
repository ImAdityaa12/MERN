const productController = require("./controller/product");
const express = require("express");
const server = express();
const router = require("./routes/product")
server.use(express.json());
server.use('/products', router.routes)

server.listen(8080, () => {
  console.log("server started");
});
