//Arrow Function
//Q. difference between regular function and arrow function

//this --> keywprd used for inform current context
//() => {} --syntax

console.log("Simple function :");
function add2(){
    let user1 = "Siddhi";
    console.log(`this.user1 : ${this.user1}`);
    
}
add2();

console.log("function stored in variable :");
const add = function(){
    let user = "Siddhi";
    console.log(user);
    console.log(this);
}
console.log(add());

console.log("Arrow function : ");
const chai = ()=>{
    let user2 = "Siddhi";
    console.log(this);
}
chai();
//we do not use this in the arrow function

const addTwoNumbers = (n1, n2)=> {
    return n1 + n2;
}
console.log(addTwoNumbers(15, 26));

//uses of the arrow function
//this keyword
//diffrence between arrow function and regular function

//activity 1- write a code for arrow function with 2 examples
//activity 2 - write a code for switch case
//activity 3 - how to use truthy and falsy values in JS with example
//activity 4 - how to use ternary operator in JS
//activity 5 - write a code for how to use loops in array
//while , do-while , for, for each, for in, for of
//diffrence between for in and for of 
//activity 6 - how to use map and filter function in JS