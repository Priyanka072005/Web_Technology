const superHeroes = ["Spiderman", "Batman"];

const value = ["A", "B", "C", "D"];

superHeroes.push(value);
console.log(superHeroes);

console.log(superHeroes[0]);
console.log(superHeroes[2]);
console.log(superHeroes[1][2]);
console.log(superHeroes[2][2]);

//array concat 
const concatArray = superHeroes.concat(value);
console.log(concatArray);

const anotherArr = [1,2,3,[4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(anotherArr);
console.log(anotherArr.length);
console.log(anotherArr.indexOf(4));

const anotherArr1 = anotherArr.flat(Infinity);
console.log(anotherArr1);

const anotherArr2 = anotherArr.flat(1);
console.log(anotherArr2);

//flat - specify how nested arrays flattned , default value = 1
//infinity - flattens all level no matter how deep they are
//flat does not change original array it returns new array , useful when working with nested data

//data scripting using methods
console.log(`data scripting using methods : `);
console.log(Array.isArray("Siddhi")); //to check given value is array or not
console.log(Array.isArray(value));

console.log(Array.from("Siddhi")); //converts a iterable objects like string, set, map into array
console.log(Array.from({"name: ": "Siddhi"}));

console.log(Object.keys({"name : ":"Siddhi"}));
console.log(Object.values({"name : ":"Siddhi"}));
console.log(Object.entries({"name : ":"Siddhi"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //create a new array from given values no matter how many 

//of --> convert values to arrray
//from --> convert iterables to array

//IQ -- what is difference between of and from method 