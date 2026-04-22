//Activity 1 - detailed study of query parameter
//a query parameter is a key-value pair appended to the end of the URL after a question mark (?). 
//These parameters are often used for filtering, searching or providing additional data to server endpoints.
//Example : https://example.com/search?name=Siddhi&age=25
//https://example.com/search --> main URL
// ? --> Starts query parameter
//name=Siddhi --> parameter 1
//& --> separate parameters
//age=25 --> parameter 2
//name and age --> keys
//Siddhi and 25 --> values

//They are used to :
//send data from frontend to backend
//filter result
//search something
//Customize responses

//Suppose we have to search the information any particular student in class but we don't know 
//his id then in that case we can use query parameters to search information of that student by using name

//Query parameter always starts with ?
//Multiple parameters are separated by &
//Format : key=value
//Used in GET requests
//Visible in URL (not secure for sensitive data)

//Activity 2 -> 3-4 examples of query parameter
//Query parameter examples
//URL : http://localhost:3000/user?name=Siddhi&age=25
// app.get("/user", (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;

//     res.send(`Name: ${name}, Age : ${age}`);
// })

// // URL: http://localhost:3000/products?category=mobile&price=20000
// app.get("/products", (req, res) =>{
//     const category = req.query.category;
//     const price = req.query.price;

//     res.json({
//         category : category,
//         maxPrice : price
//     });
// })

// // URL : http://localhost:3000/course?name=javacourse
// app.get("/course",(req, res)=>{
//     const cName = req.query.name;

//     res.send(`You search for : ${cName}`);
// });

//Activity 3 -> Real time use of query parameter
//Query parameters are used when companies want to:
//1.Filter data
//2.Search something
//3.Track users
//4.Control page behavior
//Search -> (Used by Google, YouTube, Amazon) --> Send search text to server,Server returns results
//Product Filtering (Used by Amazon, Flipkart) --> Filter products by category, brand, price
//Pagination (Used by APIs & Websites) --> Load data in parts (not all at once), Improves performance
//Redirect After Login (Used by Many Apps) --> After login → send user to specific page
//Content Customization (Used by Netflix, Spotify) --> Load specific content
