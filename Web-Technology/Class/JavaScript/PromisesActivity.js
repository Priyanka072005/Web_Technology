//Activity 1 - Why promises are better than callback
//Promises are better than callbacks because they make asynchronous code easier to read, manage, and handle errors properly.
//With callbacks, when multiple async operations depend on each other, 
//code becomes deeply nested and hard to understand.
//Callback exmaple 
// login(user, function() {
//   getProfile(function() {
//     getPosts(function() {
//       console.log("Done");
//     });
//   });
// });

//Promises allow chaining using .then() instead of nesting.
//Promises example 
// login(user)
//   .then(getProfile)
//   .then(getPosts)
//   .then(() => console.log("Done"));

//Better Error Handling 
//In callbacks, each function needs its own error handling.
//With promises, one .catch() handles all errors.
//Promises Works Easily with async/await

//Activity 2 - Promise 4 examples
//Example 1 - take variable if true then display object else error js wents wrong
let p1 = new Promise((resolve, rejected) => {
    let obj = true;
    if(obj){
        resolve({
            Username : "Siddhi",
            Id : 18
        })
    }else{
        rejected("JS went wrong!");
    }
});

p1.then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);  
});

//Example 2 - write promise using async or in function
console.log();
function getData(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve("Data received!");
        }, 3000);
    })
}

async function Showdata(){
    let result = await getData();
    console.log(result);
}

Showdata();

//Example 3 - Square of the number
async function Square(n){
    let p2 = new Promise((resolve, rejected)=>{
        let num = n;
        resolve(num * num);
    })

    let result = await p2;
    console.log(result);
}

Square(5);

//Example 4 - check eligibility for voting 
function CanVote(age){
    return new Promise((resolve, rejected)=>{
        if(age >= 18){
            resolve("You can vote !!");
        }else{
            rejected("You cannot vote..!");
        }
    })
}

async function ShowResult(){
    try{
        let result = await CanVote(20);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

ShowResult();