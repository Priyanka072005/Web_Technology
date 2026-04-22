//Activity 1 - blocking example 
console.log("Activity 1 : Blocking example --> ");
function blocking(){
    console.log("Task started");
    let sum = 0;
    for(let i = 0; i < 50; i++){
        sum += i;
    }
    console.log("Result:"+sum);
    console.log("Task finished");
}
console.log("Before function call");
blocking();
console.log("After function call");

console.log();

console.log("Activity 2 : Unblocking example -->");
function Unblocking(){
    console.log("Task started");
    setTimeOut(()=>{
        let sum = 0;
        for(let i =0; i < 50; i++){
            sum += i;
        }
    }, 0);
    console.log("Result : "+sum);
    console.log("Task finished");
}

console.log("Before function call");
Unblocking();
console.log("After function call");

//Activity 3 - real time use in company level
//async/await is used to write clean, maintainable, and readable asynchronous code
//for handling API calls, database operations, and external services in production applications.

//Activity 4 - Api fetch method
//fetch() is a built-in JavaScript method used to: Send HTTP requests, Communicate with servers
//Get or send data (JSON, files, etc.)
//It is mainly used for: Calling backend APIs, 
//Getting database data, Sending form data, Authentication requests