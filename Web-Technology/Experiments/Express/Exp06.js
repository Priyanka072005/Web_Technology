const express = require('express')
const app = express();
const port = 3000;

//middleware
app.use((req, res, next)=>{
    console.log(`Data received : ${new Date()}`)
    next();
})



//routes
app.get("/", (req, res)=>{
    res.send("Welcome to Home page!!");
})

app.get("/about", (req, res)=>{
    res.send("About page");
})

app.get("/register", (req, res)=>{
    res.send("Register to our website.");
})

app.get("/contact", (req, res)=>{
    res.send("Contact us.");
})

app.listen(port, ()=>{
    console.log(`Server started at port${port}`);
})