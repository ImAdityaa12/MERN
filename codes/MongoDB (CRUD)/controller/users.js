const fs = require('fs')
// const index = fs.readFileSync("index.html", 'utf-8')
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
const users = data.users


exports.createUser =  (req, res)=>{
    console.log(req.body);
    users.push(req.body)
    res.json(req.body)
}
exports.updateUser = (req, res)=>{
    const id = +req.params.id
    const UserIndex = users.findIndex((p)=>p.id===id)
    users.splice(UserIndex, 1, {...req.body, id:id})
    res.status(201).json()
}
exports.getUserbyId = (req, res)=>{
    const id = +req.params.id;
    const User = users.find((p)=>p.id === id)
    // console.log(req.body);
    res.json(User)
}
exports.getAllUser = (req, res)=>{
    res.json(users)
}
exports.updateDetail = (req, res)=>{
    const id = +req.params.id
    const UserIndex = users.findIndex((p)=>p.id===id)
    const User = users.find((p)=>p.id === id)
    users.splice(UserIndex, 1, {...User,...req.body})
    res.status(201).json()
}
exports.deleteUser = (req, res)=>{
    const id = +req.params.id
    const UserIndex = users.findIndex((p)=>p.id===id)
    const User = users.find((p)=>p.id === id)
    users.splice(UserIndex, 1)
    res.status(201).json(User)
}
