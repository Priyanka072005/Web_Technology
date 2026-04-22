const express = require('express');
const app = express();
const port = 3000;

const users = [
    {id : 1 , name : "Siddhi", age : 20, Grade : "A"},
    {id : 2 , name : "Ankita", age : 21, Grade : "B"},
    {id : 3 , name : "Anuradha", age : 21, Grade : "C"},
    {id : 4 , name : "Riddhi", age : 21, Grade : "B"},
]

app.get("/user", (req, res)=>{
    res.json(users);
})

app.get("/user/:id", (req, res)=>{
    const userId = req.params.id;

    const user1 = users.find(u => u.id == userId)
    if(user1){
        res.json(user1);
    }else{
        res.send(`User with id : ${userId} not found`);
    }
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})