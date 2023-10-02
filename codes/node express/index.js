const fs = require('fs')
const index = fs.readFileSync("index.html", 'utf-8')
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
const products = data.products

const express = require('express')
// const { get } = require('http')
const server = express()
server.use(express.json())
server.use((req, res, next)=>{
    console.log(req.method, req.ip);
    next()
})  
const auth = (req, res, next) =>{
    if (req.query.password == '123') {
        next()
    }
    else{
        res.sendStatus(401)
    }
}

// server.use(auth)

server.get("/product/:id", (req, res)=>{
    console.log(req.params);
    res.json({type: "GET"})
})
server.put("/", (req, res)=>{
    res.json({type: "PUT"})
})
server.post("/", auth, (req, res)=>{
    res.json({type: "POST"})
})
server.patch("/", (req, res)=>{
    res.json({type: "PATCH"})
})
server.delete("/", (req, res)=>{
    res.json({type: "Delete"})
})

// server.get('/', (req, res)=>{
//     // res.json(data.products)
//     // res.sendStatus(404)
//     // res.send("<h1>Hello</h1>")
// })



server.listen(8080, ()=>{
    console.log("server started");
})