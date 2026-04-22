//activity 1 - write a code for arrow function with 2 examples
console.log("Activity 1 - code for arrow function with 2 examples");
const sqr = (x) =>  x * x;

console.log(`Square of 5 : ${sqr(5)}`);

const createObject = (firstName, lastName) => (
    {
        first : firstName,
        last : lastName
    });

console.log(createObject("Siddhi", "Chavan"));

//Activity 2 - write code for switch case
console.log("Activity 2 - Code for switch case");

function switchFun(day){
    switch(day){
        case 1 : 
            console.log("Monday");
            break;
        
        case 2 : 
            console.log("Tuesday");
            break;

        case 3 : 
            console.log("Wednesday");
            break;

        case 4 :
            console.log("Thursday");
            break;

        case 5 : 
            console.log("Friday");
            break;

        case 6 : 
            console.log("Saturday");
            break;

        case 7 :
            console.log("Sunday");
            break;

        default :
            console.log("Enter number between 1-7");  
    }
}

switchFun(1);

//Activity 3 - truthy and falsy values
console.log(`Activity 3 - Truthy and falsy values`);
console.log(`Truthy : `);
if(42) console.log(42 + " is truthy");
if("JavaScript") console.log(`Non empty strings are truthy.`);
if({}) console.log(`Objects are truthy`);

console.log(`Falsy : `);
if(0) console.log(`This won't run because 0 is falsy.`);
if("") console.log(`This won't run because empty strings are falsy`);
if(null) console.log(`This won't run because null are falsy`);

//logical operators with truthy and falsy
//for && if both are truthy then returns last operand
//for && if one is truthy and one is falsy then returns first falsy
//for && if bothh are falsy returns first falsy
console.log(`&& operator : `);
console.log(true && "JavaScript"); //both true so output -  last operand --> JavaScript
console.log(false && "JavaScript"); //one true one false - first falsy --> false
console.log(0 && false); //both false - first falsy --> 0

console.log(`|| operator : `);
console.log("Hello" || false); //one true and one false - first truthy --> Hello
console.log(0 || {}); //one true and false - first truthy --> {}
console.log("Hello" || {}); //both truthy - first operand --> Hello
console.log(0 ||  false); //both falsy - last operand --> false

//Activity 4 - use ternary operator
console.log(`Activity 4 - Use Ternary operator`);
let marks = 80;
let result = (marks > 40) ? "Pass" : "Fail";
console.log(`Student is ${result}`);

//Activtiy 5 - loops in Js
console.log(`Activity 5 - Loops in array`);
const arr = [10, 20, 30, 40, 50];
let n = arr.length;
let i = 0;
console.log(`While loop`);
while(i < n){
    console.log(arr[i]);
    i++;
}

let idx = 0;
console.log(`do-while`);
do{
    console.log(arr[idx]);
    idx++;
}while(idx < n);

console.log(`for loop`);
for(let j = 0; j < n; j++){
    console.log(arr[j]);
}

console.log(`for of loop`);
let sum = 0;
for(let val of arr){
    sum += val;
}
console.log(`Sum of arr : ${sum}`);

console.log(`For each method`);
arr.forEach(function(nums){
    console.log(nums);
});

console.log(`For in loop`);
const student = { fName : "Siddhi", lName : "Chavan"};
for(let key in student){
    console.log(key + ":" + student[key]);
}

//Activity 6 - map and filter function in JS
console.log(`Acitivty 6 - map and filter function in js`);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.filter(even => even % 2 == 0).map(e => e * e).forEach(value => console.log(value));
