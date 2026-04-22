//Activity 1 - Difference between package.json and package-lock.json
//package.json --> It is the main project file in a Node.js project
//It contain information like - project name, version, dependancies etc.
//package.json tells what dependencies are required for the project.
//npm init - package.json

//package-lock.json --> It is automatically created by npm
//It stores exact version of every installed package and sub-package
//Ensures that everyone installing the project gets exactly the same versions.
//package-lock.json locks the exact versions actually installed.
//npm install - package-lock.json

//package.json defines required packages, while 
//package-lock.json records the exact versions installed to keep installations consistent.

//Activity 2 - Difference between Dev dependancies and dependancies
//Dependencies are the packages required for the application to run properly in production, such as libraries used in the main code.
//These are needed to run your project Without them, your app will not work
//E.g. Express
//Dev dependencies are the packages used only during development, like testing tools or auto-reload tools and they are not required when the application is deployed.
//E.g. nodemon
//In short, dependencies are needed to run the app, while dev dependencies are needed to develop the app.

//Activity 3 - Routes + using js
const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Home page !!")
})

app.get("/user", (req, res) => {
    const user = {
        name : "Siddhi",
        age : 21
    };
    res.json(user);
})

//dynamic route 
//pass name from url
app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send("Hello " + name);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

//Activity 4 - HTTP methods 
//GET - Get data from server
//E.g. - Fetch users
//POST - Send new data to server
//E.g. - create new user
//PUT - Update full data 
//E.g. - update complete user info
//PATCH - Update partial data 
//E.g.- update only name
//DELETE - Delete data
//E.g. - Remove user
//HTTP methods define the type of operation a client wants to perform on a server.
//GET is used to retrieve data, POST is used to create new data, PUT and PATCH are used to update data (full or partial), and DELETE is used to remove data.