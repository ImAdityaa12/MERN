const fs = require('fs')
const index = fs.readFileSync("index.html", 'utf-8')
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
const products = data.products

const express = require('express')
const server = express()
server.use(express.json())

//GET
server.get("/products", (req, res)=>{
    const id = +req.params.id;
    const product = products.find((p)=>p.id === id)
    // console.log(req.body);
    res.json(products)
})

//PUT
server.put("/products/:id", (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json()
})

//POST
server.post("/products", (req, res)=>{
    console.log(req.body);
    products.push(req.body)
    res.json(req.body)
})

//patch
server.patch("/products/:id", (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    const product = products.find((p)=>p.id === id)
    products.splice(productIndex, 1, {...product,...req.body})
    res.status(201).json()
})

//Delete
server.delete("/products/:id", (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex((p)=>p.id===id)
    const product = products.find((p)=>p.id === id)
    products.splice(productIndex, 1)
    res.status(201).json(product)
})



server.listen(8080, ()=>{
    console.log("server started");
})