//slice() - slice out the piece of the array into a new array
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(`Slice from index 3 : `);
console.log(arr.slice(3)); //if we give only one index then it will return rest of the array

//when we pass 2 index then starting index is included and ending index is excluded
console.log(`Slice from index 3 to 5 : `);
console.log(arr.slice(3, 6));


//splice() method - method adds new items to an array.
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:

const fruits = ["Apple", "Mango", "Banana", "orange", "Kiwi"];
console.log(`Fruits array : ${fruits}`);
let deleted_items = fruits.splice(2, 1, "Pineapple", "Cherry");
console.log(`Deleted items : ${deleted_items}`);
console.log(`After splice() fruits : ${fruits}`);
console.log();

//we can write the splice method just to delete the elements then just give the index and the no. of elements to delete
const num = [10, 20, 30, 40, 50, 60, 70];
console.log(`Numbers array : ${num}`);
let deleted_numbers = num.splice(0, 1);
console.log(`Deleted numbers : ${deleted_numbers}`);
console.log(`After splice() num : ${num}`);

//toSpliced() method 
//difference between the splice() and toSpliced() is that the splice() method alteres or change the original array
//toSpliced() method keeps the original array unchanged (keeps it as it is)
//rest all working of the splice() and toSpliced() is same

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
let spliced = months.toSpliced(1, 1);
console.log(`the spliced element : ${spliced}`);
console.log(`original array : ${months}`); //this remains unchanged

//adding new element
const spliced_arr = months.toSpliced(1, 5, "October");
console.log(spliced_arr);
console.log();


//split() method
//split() method splits a string into an array of substrings.
//split() method returns the new array.
//split() method does not change the original string.
//If (" ") is used as separator, the string is split between words.
//If ("") is used as separator, the string is split between character(including spaces)

let text = "How are you doing today ?";
const myText = text.split(" ");
console.log(`Original text : ${text}`);
console.log(`after split() : ${myText}`);

//split the text and return second word
let txt = "How are you doing today ?";
const myTxt = txt.split(" ");
console.log(`Original txt : ${txt}`);
console.log(`After split () : ${myTxt}`);
console.log(`Second element : ${myTxt[1]}`);

//spliting text into characters including spaces
let str = "How are you doing today ?";
const myStr = str.split(""); //this split the txt in the character array
console.log(`Str : ${str}`);
console.log(`after spliting : ${myStr}`);

//limit for spliting 
const myStr2 = str.split(" ", 3); //if we do not add space it act same for the characters means split characters as per the limit
console.log(`str : ${str}`);
console.log(`after limit : ${myStr2}`);

 

