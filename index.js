const productController = require("./controller/product");
const express = require("express");
const server = express();
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
server.use(express.json());
server.use('/products', productRouter.routes)
server.use('/user', userRouter.routes)

server.listen(8080, () => {
  console.log("server started");
});
