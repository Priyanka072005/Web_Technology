//fetch is a built-in js method used to make HTTP request
//fetch method return promises
//example 
//syntax --> fetch('url') -- it returns promises 

fetch("https://jsonplaceholder.typiCode.com/users")
.then((response)=>{
    return response.json() })
.then((data) => {
    console.log(data);})
.catch((error) => {
    console.log(error); 
});

//to get a specific user 
//write like - fetch("https://jsonplaceholder.typiCode.com/users/2")
//last 2 indicates the user id

//Activity 1 - understand the above code line by line
//Activity 2 - async await exmaple with fetch method
//Activity 3 - fetch user display names in html list
//Activity 4 - fetch post, show only first 5 
//Activity 5 - create a fake promise manually resolve after 3 sec and reject after 3 sec

//interview question
//What is Promise in JS
//What is promise status
//Difference between promises and callback
//what is a fetch method in JS
//What does fetch return
//Why do we use response.json()
//Most IMP ------ difference between then and catch and async await
//What is a promise chaining
