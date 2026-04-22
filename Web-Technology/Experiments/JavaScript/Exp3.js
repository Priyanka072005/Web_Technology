//function - a block of code that perform specific task and that can be reused as many times
//declaration -  function myFunction();

//add 2 numbers
function add2Numbers(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("hello JS"); //this code will not be executed because after return statement no any line is executed
}

let res = add2Numbers(5, 4)
console.log(`Addition : ${res}`);

function loginMessage(userName){
    if(userName === undefined){
        console.log(`Please enter username.`);
        return;
    }
    return `${userName} just login!`;
}

console.log(loginMessage("Siddhi"));
console.log(loginMessage()); // when your string is empty then it gives undefined

function calculatePrice(...num1){
    return num1;
}

console.log(calculatePrice(100, 300, 400));
//in JS ...num1 --> spread operator/ rest operator all value given in one value in array


//most IMP for interview
const username = {
    name : "Siddhi",
    age : 20,
    
};

function handleObj(obj){
    console.log(`Username is : ${obj.name} and age is : ${obj.age}`);
}
handleObj(username);

const myArr = [200, 300, 400];

function handleArr(myArray){
    console.log(`myArr : ${myArray}`);
    console.log(`Array elements 0 : ${myArray[0]}\nArray element 1 : ${myArr[1]} \nArray element 2 : ${myArr[2]}`);

}
handleArr(myArr);

