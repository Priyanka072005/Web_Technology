//Promises -> definition - a promises is an a object that represent future result of an asynchronous operation
//promises means i promise to give result later
//real life example - zomato application  food order delivery estimated time 
//promises has 3 states 
//1. pending -> waiting
//2. resolved -> success/fulfilled
//3.rejected -> failed
//pending
//   ||
// resolve / rejected

//Promise created
//resolve - success
//rejected - error
let myPromises = new Promise((resolve, rejected) => {
    let success = true;
    if(success){
        resolve("Data fetched successfully.");
    }else{
        rejected("Error while fetching data");
    }
});

//call promise
//.then - runs when success
//.catch - runs when error
myPromises.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

//homeactivity
//Activity 1 - Why promises are better than callback
//Activity 2 - create 4 promises examples 
//1. take variable if true then display object else error js wents wrong
//2. write promise using async or in function 
//3.2 simple examples 

//examples 1
const promise1 = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        console.log("Async task Complete");
        resolve();
    }, 3000);
});

promise1.then(()=>{
    console.log("Promise Consume")
})

//Example 2 
const promise2 = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve({
            username : "Siddhi", 
            id : 18
        })
    },3000);
});

promise2.then((user)=>{
    console.log(user);
})