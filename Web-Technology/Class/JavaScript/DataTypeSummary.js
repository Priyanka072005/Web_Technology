//types - primitive and non primitive
//primitive - numbre, bigINt, boolean, 

//symbol example - used when there is unique id
let anotherId = Symbol("123");
console.log(anotherId );
console.log("typeof anotherid : "+ typeof(anotherId));

const id = 123;
console.log(id === anotherId);

//javaScript is dynamic or static ---> dynamic
//non primitive - object , array , function
//array 
const arr = ["Siddhi", "Ankita", "Anuradha"];
const num = [1, 2, 3, 4, 5];

//objects - collection of key value pairs
let obj = {
    fName : "Js",
    age : 20
};
console.log("name : " + obj.name);
console.log("age : " + obj.age);

//functions - block of code that perform specific task
//what is function definition
//what is function declaration
function fun(){
    console.log("Siddhi");
}

//function alias
const myFunction = fun;
console.log(myFunction);

//memory 
//2 types of the memory - stack and heap
//stack used for primitive data types
//heap used for non-primitive data types
let myYoutubeName = "SSC";
let newMyYoutubeName = myYoutubeName;
console.log(myYoutubeName);
console.log(newMyYoutubeName); 

newMyYoutubeName = "SC";
console.log(newMyYoutubeName);
//stack memory used for primitive data types like string , number, boolean it means copy of value is given
//when we assign one variable to another a copy is made so changing one does not affect others


//heap memory - used for non primitive data types like object , function, array reference is given 
let user1 = {
    fName  : "Siddhi",
    age : 20,
    id : 15
}

let user2 = user1;
console.log(user1);
console.log(user2);

user2.id = 26;
console.log(user1.id);
console.log(user2.id);
//objects are stored in heap memory 
//when we assign on eobj to another variable reference is copied not the value
//if we change one bothh variables see the changes
//IQ -  what is stack and heap memory










//string , array , object , function