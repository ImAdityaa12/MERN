const fs = require('fs')
// const index = fs.readFileSync("index.html", 'utf-8')
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
const products = data.products


exports.createProduct =  (req, res)=>{
    console.log(req.body);
    products.push(req.body)
    res.json(req.body)
}
exports.updateProduct = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json()
}
exports.getProductbyId = (req, res)=>{
    const id = +req.params.id;
    const product = products.find((p)=>p.id === id)
    // console.log(req.body);
    res.json(product)
}
exports.getAllProduct = (req, res)=>{
    res.json(products)
}
exports.updateDetail = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    const product = products.find((p)=>p.id === id)
    products.splice(productIndex, 1, {...product,...req.body})
    res.status(201).json()
}
exports.deleteProduct = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    const product = products.find((p)=>p.id === id)
    products.splice(productIndex, 1)
    res.status(201).json(product)
}
