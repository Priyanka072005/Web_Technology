//Array - 
let myArr = [0, 1, 2, 3, 4, 5];
console.log(`myArr values : ${myArr[0]}`);
console.log(`typeof myArr : ${typeof(myArr)}`);


const arr = new Array(0, 1, 2);
console.log(`arr value : ${arr[0]}`);


//Array methods 
//push method
arr.push(6); // add values in the array
console.log(`push method : ${arr}`); 

//pop method  - removes last value from array
arr.pop(); 
console.log(arr);

//unshift method - it shifts all elemets and add the new value at first position(0 th index)
arr.unshift(9);
console.log(arr);

//removes the unshifted element 
arr.shift()
console.log(arr);

//includes method - check whether the value present in the array or not
console.log(arr.includes(26));
console.log(arr.includes(1));

//indexOf method - gives the index of the element in the array
console.log(arr.indexOf(2));
console.log(arr.indexOf(26));

//activity - array slice and split methods (next tuesday)







