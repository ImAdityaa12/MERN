const http = require('http')
const fs = require('fs')
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
const index = fs.readFileSync("index.html", 'utf-8')
const products = data.products
const server = http.createServer((req, res)=>{
    console.log("started");
    if (req.url.startsWith("/product")) {
        const id = req.url.split("/")[2]
        const product = products.find(p => p.id === +id)
        // console.log(prd);
        res.setHeader('Content-Type', "text/html")
        let modifiedIndex = index.replace('**title**', product.title).replace("**price**", product.price).replace("sf", product.thumbnail).replace("**rating**", product.rating)
        res.end(modifiedIndex)
        return
    }
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', "text/html")
            res.end(index)
            break;
        case '/api':
            res.setHeader('Content-Type', "application/json")
            res.end(JSON.stringify(data))
            break;
        // case '/product':
        //     res.setHeader('Content-Type', "text/html")
        //     let modifiedIndex = index.replace('**title**', product.title).replace("**price**", product.price).replace("sf", product.thumbnail).replace("**rating**", product.rating)
        //     res.end(modifiedIndex)
        //     break
        default:
            res.writeHead(404, 'nt found')
            res.end()
            break;
    }
    console.log(req.url);
})
server.listen(8080)