//object literals
//object - key value pair

let myObj = {
    name : "Siddhi",
    age : 20,
    location : "Ichalkaranji",
    email : "siddhi@123",
    isLogin : false,
    loginDay : ['monday', 'tuesday', 'wednesday'],
    "Full Name" : "Siddhi Chavan",
    //[mySymbol ]: "My key 1"
};

console.log(myObj);
console.log(myObj.email);
console.log(myObj["Full Name"]); //when key is in double quote //wrong way
console.log(myObj);
//console.log(typeof(myObj.mySymbol)); //type of symbol is string


//IQ - how to convert symbol to type symbol
//there are two ways of declaring objects 
//1. Object literals
//2.constructor
//3. singleton
//when you create constructor it create singleton object it means itself object

//////IQ - types/ways of decalaring object 

//when we create object literals singleton not create
//object constructor - singleton create

//Symbol example 
const mySym = Symbol("My key1");
console.log(mySym);
console.log(typeof(mySym));

let myObj2 = {
    [mySym]  : Symbol("SSC")
}
console.log(myObj2);
console.log(typeof(myObj2));
console.log(myObj2[mySym]);
console.log(typeof(myObj2[mySym]));

console.log("change the email : ");
myObj.email = "google@123";
console.log(myObj.email);

//to make field freeze
// Object.freeze(myObj);

// myObj.email = "abcd@123";
// console.log(myObj.email); //this is not changed because we applied Object.freeze()

myObj.greeting = function(){
    console.log("Hello JS user.");
}
console.log(myObj.greeting());





