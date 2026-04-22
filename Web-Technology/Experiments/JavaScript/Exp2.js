//task 1 -array , function, object
//declare and print with example
console.log(`Activity 1 : Declare array , function and object`);
const arr = [10, 20, 30, 40, 50];
console.log(arr);

function myFunction(a, b){
    return a + b;
}
const result = myFunction(10, 5);
console.log(`Addition : ${result}`);

const myObj = {
    name : "Siddhi",
    age : 20,
    id : 15
}
console.log(myObj);

const str = new String("Hello world !!");
console.log(str);

//task 2 - find largest number in string -- repeated 

//task 3 -  find reverse number in string (reverse number)
console.log("Activity 3 - Reverse the string");
let str2 = "Hello";
let reverseString = "";
for(let i = str2.length - 1; i >= 0; i--){
    reverseString += str2[i];
}
console.log(reverseString);
// console.log();

//task 4 -  check palindrome string
console.log(`Activity 4 : string palindrome`);
let str1 = "ABA"
let reverseStr1 = "";

for(let i = str1.length - 1; i >= 0; i--){
    reverseStr1 += str1[i];
}
console.log(`reverseStr1 : ${reverseStr1}`);
if(str1 === reverseStr1){
    console.log(`String is palindrome`);
}else{
    console.log(`String is not palindrome`);
    
}
// console.log();

//task 5 -write code for fibonacci series
console.log(`Activity 5 - fibonacci Series`);
function fibonacci(num){
    let a = 0, b = 1;
    for(let i = 1; i <= num; i++){
        console.log(a);
        let sum = a + b;
        a = b;
        b = sum;
    }
}
fibonacci(5);
// console.log();

//task 6 - count vowels in string
console.log(`Activity 6 - Count vowels in string`);
const vowel = "Siddhi";
let count = 0;

for(let i = 0; i <= vowel.length; i++){
    if(vowel[i] === 'a' || vowel[i] === 'e' || vowel[i] === 'i' || vowel[i] === 'o' || vowel[i] === 'u' || vowel[i] === 'A' || vowel[i] === 'E' || vowel[i] === 'I' || vowel[i] === 'O' || vowel[i] === 'U'){
        count++;
    }
}
console.log(`Count of vowels : ${count}`);
// console.log();

//task 7 - find largest element in array
console.log(`Activity 7 - largest element in array`);
const numbers = [10, 20, 30, 40, 50];
let maxNum = -Infinity;

for(let i = 0; i < numbers.length - 1; i++){
    
    if(numbers[i] > maxNum){
        maxNum = numbers[i];
    }
}
console.log(`Max Number : ${maxNum}`);
// console.log();

//task 8 - remove duplicate number from array
console.log(`Activity 8 - remove duplicate number from array`);
let arr1 = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(`Original array : ${arr1}`);

for(let i = 0; i <  arr1.length; i++){
    for(let j = i + 1; j < arr1.length; j++){
        if(arr1[i] === arr1[j]){
            arr1.splice(j, 1);
            j--;
        }
    }
}
console.log(`Array after removing duplicates : ${arr1}`);
// console.log();

//task 9 - find missing number in array
console.log(`Activity 9 - find missing number in array`);
const arr2 = [1, 2, 5, 4, 6, 8, 7];

function findMissingNumber(arr2){
    let n = arr2.length + 1;
    let sumofFirstN = (n * (n + 1)) / 2;

    let sumOfArr2 = 0;
    for(let i = 0; i < arr2.length; i++){
        sumOfArr2 += arr2[i];
    }
    let missingNumber = sumofFirstN - sumOfArr2;
    return missingNumber;
}
console.log(`Missing number is : ${findMissingNumber(arr2)}`);
// console.log();

//task 10 - function to find even or odd
console.log(`Activity 10 - Function to find even or odd`);
function evenOdd(n){
    if(n % 2 == 0){
        console.log(`The number ${n} is Even`);
    }else{
        console.log(`The number ${n} is Odd`);
    }
}
evenOdd(10);
// console.log();

//task 11 -  write a code for sum of array
console.log(`Activity 11 - function to find sum of array`);
const values = [10, 20, 30, 40, 50];
function sumOfArray(values){
    let sum = 0;
    for(let i = 0 ; i < values.length; i++){
        sum += values[i];
    }
    return sum;
}
console.log(`Sum of array elements : ${sumOfArray(values)}`);
// console.log();


//task 1 -array , function, object
//task 2 - find largest number in array
//task 3 -  find reverse number in string 
//task 4 -  check palindrome string
//task 5 -write code for fibonacci series
//task 6 - count vowels in string
//task 7 - remove duplicate number from array
//task 8 - find missing number in array
//task 9 - function to find even or odd
//task 10 -  write a code for sum of array