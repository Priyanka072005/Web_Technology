//Activity 1 - Why we use middleware ?
//Middleware is a function that runs between the request and response in your server
//We use middleware for -- 1.To check something before giving response e.g. - chec if user id logged in
//                         2. to modify request or response e.g. - add extra data
//                         3.To handle common task e.g. - logging, authentication, error handling
//Request --> middleware --> route ----> Response

//Middleware is a function that is used in frameworks like Express.js to process 
//requests before reaching the final route handler. It is commonly used for tasks like authentication, logging, validation.


//Activity 2 - What are the types of middleware ? 
//1. Application level middleware - used for the whole app or specific routes
//Example----
// app.use((req, res, next) => {
//     console.log("Application middleware");
//     next();
// });

//2. Router level middleware - works only for a specific router
//Example --
// const router = require('express').Router();

// router.use((req, res, next) => {
//     console.log("Router middleware");
//     next();
// });

// app.use("/user", router);

//3.built-in middleware - already provided by express
//Example
// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

//4.Error-handling middleware - used to handle errors
//Example
// app.use((err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send("Something went wrong");
// });

//5.Third party middleware - installed from outside(npm packages)
//Example
//morgan - logging
//cors(cross origin resourse sharing) - enable cross-origin requests enable 
//secure communication between front-end and back-end when they are on different network origin

//const cors = require('cors);
//app.use(cors());


//Activity 3 - What are the benefits of middleware
//1.Code reusability - No need to repeat same logic in every route
//2.Cleaner code - Keeps your main route code simple and readable
//3. Centralized control - Handle common tasks in one place --> Logging, validation, error handling can be managed easily
//4. Better security - Helps in protecting routes -> Can check login, tokens, permissions before access
//5. Easy Debugging & Maintenance - Errors and logs are handled in one place
//6. Request/Response Modification - Can modify request or response

//Activity 4 - Where the middleware is used in company level ?
//1.Authentication - Check if user is logged in or not
//2.Authorization (Permission check) - Check what user is allowed to do --> E.g. Admin can delete data, normal user cannot.
//3.logging - Store request details - which user accessed which API
//4.Error handling - Handle error in one place --> Server error → middleware sends proper message instead of crashing
//5.Data validation - Check user input --> Email format correct or not, Password length valid or not
//6.API security - Protect APIs -> Prevent hacking or spam
//7.Parsing data - Convert request data into usable format --> JSON data → JavaScript object