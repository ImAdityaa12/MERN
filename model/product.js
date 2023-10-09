const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ]
  });
  // More Validation
  // const productSchema = new mongoose.Schema({
  //   title: {type: String, required: true},
  //   description: String,
  //   price: {type: Number, min:[0,"wrong min"]},
  //   discountPercentage: {type: Number, min:[1, "wrong min"], max:[50,'Wrong max']},
  //   rating: {type: Number, min:[0,"wrong rating"], max:[5, "wrong rating"]},
  //   brand: {type: String, required: true},
  //   category: {type: String, required: true},
  //   thumbnail: {type: String, required: true},
  //   images: [ String ]
  // });
  
exports.Product = mongoose.model('Product', productSchema)