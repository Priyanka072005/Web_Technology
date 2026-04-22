const express = require('express')
const app = express();
const port = 3000;

//middleware
// function checkRoute(req, res, next){
//     console.log(req.url);
//     next();
//     //if we do not write the next() the the request hang
//     //then the page loads only , do not show annything
// }

// app.use(checkRoute)

//advance level middleware
app.use((req, res , next) => {
    console.log(`Data received : ${new Date()}`)
    next();
})

app.get("/", (req, res) => {
    res.send("Hello");
})

//Routes examples
app.get("/GetTime", (req, res) => {
    const time = Date();
    res.json({
        message : "Hello",
        time1 : time
    })
})

app.get("/about", (req, res) => {
    res.send("Welcome to About page!!")
})

app.get("/ourServices", (req, res) =>{
    res.send("This page is about our services")
})

app.get("/contact", (req, res) => {
    res.send("Contact us!!")
})

//Query parameter examples
//URL : http://localhost:3000/user?name=Siddhi&age=25
app.get("/user", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age : ${age}`);
})

// URL: http://localhost:3000/products?category=mobile&price=20000
app.get("/products", (req, res) =>{
    const category = req.query.category;
    const price = req.query.price;

    res.json({
        category : category,
        maxPrice : price
    });
})

// URL : http://localhost:3000/course?name=javacourse
app.get("/course",(req, res)=>{
    const cName = req.query.name;

    res.send(`You search for : ${cName}`);
});

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})
