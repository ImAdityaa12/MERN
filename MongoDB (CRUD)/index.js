require('dotenv').config()
const productController = require("./controller/product");
const express = require("express");
const server = express();
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
server.use(express.json());
server.use('/products', productRouter.routes)
server.use('/user', userRouter.routes)
// console.log(process.env.DB_PASSWORD);

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database Connected");
}

server.listen(process.env.PORT, () => {
  console.log("server started");
});
