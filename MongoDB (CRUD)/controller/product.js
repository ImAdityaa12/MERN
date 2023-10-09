const model = require('../model/product')
const Product = model.Product
const mongoose = require('mongoose');

exports.createProduct = async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    console.log(product);
    res.status(201).json(product)
}
exports.updateProduct = async (req, res)=>{
    const id = req.params.id
    try {
        const doc = await Product.findOneAndReplace({_id: id}, req.body )
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
exports.getProductbyId = async (req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id)
    // console.log(req.body);
    res.json(product)
}
exports.getAllProduct = async (req, res)=>{
    const products = await Product.find()
    // const products = await Product.find({price: {$gt: 500}})
    res.json(products)
}
exports.updateDetail = async (req, res)=>{
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({_id: id}, req.body, {new: true} )
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
exports.deleteProduct = async (req, res)=>{
    const id = req.params.id
    try {
        const doc = await Product.findOneAndDelete( {_id: id} )
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
