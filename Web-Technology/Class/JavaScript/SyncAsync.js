// Synchronous javaScript -> code execute line by line 
// 			each task wait for previous task to finish 
// 			blocking in nature
// sequential behaviour

console.log("Start");

add = (a, b)=> {
    return a + b;
};
let r = add(5, 3);
console.log("Result : "+r);

console.log("End");

//Asynchronous programming - some task take time like api call, file read, database and time 
//Js does not wait it moves to next line 
//non blocking behaviour 
//Uses -- fetching data from server, reading file, set timeout , API calls 

console.log("Start");
const setTimeOut = (()=> {
    Console.log("Inside timeout");
}, 4000);

console.log("End");

//settimeout is asynchronous it will start function and then after 4 sec it will print the inside timout line 
//Activity 1 - guess the output game 
//Activity 2 - blocking and unblocking 2 examples 
//Activity 3 - real life examples for both sync and async 
//Activity 4 - API fetch method 