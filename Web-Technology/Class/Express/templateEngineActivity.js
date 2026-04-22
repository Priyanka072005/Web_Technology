//Activity 1 --> Implement EJS
//Steps for EJS implementation
//1.Create a project folder - eg. EJS_demo
//2.Initialize node project --> npm init -y
//3.Install required packages --> npm install express ejs
//4.create file server.js and views/index.ejs files
//5. Write code in server.js
//6.Write code in views/index.ejs
//7.Run the server --> node server.js
//8.Open browser and run --> http://localhost:3000


//Activity 2 --> What are static files
//Static files are files whose content does NOT change on the server.
//Examples - HTML, CSS, JavaScript(frontend), Images(.jpg, .png), Fonts
//real time example --> static file is like printed book - no matter who reads it , the content stays the same
//app.use(express.static('public));
//Serve all files inside the public folder directly to the browser.
//that line used to server ststic files like CSS, images and JS directly from the public folder


//Activity 3 - what is express router ?
//Express Router is a feature in Express.js used to organize routes 
//into separate files instead of writing everything in one file.
//for large applications if we write all routes in one file it become messy 
//if we write separate files for routes then we can easily maintain code and keep the structure clean
//routes/user.js
// const express = require('express');
// const router = express.Router();

// // routes
// router.get('/', (req, res) => {
//     res.send("User Home");
// });

// router.get('/profile', (req, res) => {
//     res.send("User Profile");
// });

// module.exports = router;

//server.js
// const express = require('express');
// const app = express();

// const userRouter = require('./routes/user');

// // use router
// app.use('/user', userRouter);

// app.listen(3000);

//flow --> Request → server.js → router file → response


//Activity 4 - Complete express framework flow/workflow
//1.Client (Browser)
//2.Request
//3.Express Server
//4.Middleware
//5.Routing
//6.Controller Logic
//7.Response
//8.Browser Output
