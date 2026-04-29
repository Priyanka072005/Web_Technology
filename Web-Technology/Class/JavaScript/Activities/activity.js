// Activity No.01 ->
// Conversion Operators
let str = "123";

console.log(Number(str));
console.log(String(123));  
console.log(Boolean(1));    
console.log(Boolean(0)); 

// Arithmetic Operators
let a = 10, b = 3;

console.log(a + b); 
console.log(a - b);
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 

// String Addition
console.log("10" + 5); // "105"

// Important Note (Auto Conversion)
console.log("10" - 5); // 5
console.log("10" * 2); // 20

// Increment Operator
let x = 5;
console.log(++x);
console.log(x++); 
console.log(x);  

// Comparison Operators
console.log(5 == "5");  
console.log(5 === "5");  
console.log(5 > 3);  

// Null vs Undefined
console.log(null == undefined); 
console.log(null === undefined); 

// Math.random()
console.log(Math.random()); 
console.log(Math.floor(Math.random() * 10)); 


// Activity N0.2. Function Activity
// Function Basics
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Priyanka"));

// String Methods
let str = "Hello World";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.slice(0, 5));


//Activity No.3. Array Activity
let arr = "a,b,c,d".split(",");
console.log(arr);

let nums = [1,2,3,4];

nums.splice(1,2); // remove
console.log(nums);

let arr2 = [10,20,30,40];
console.log(arr2.slice(1,3));

let arr3 = [1,2,3];
let newArr = arr3.toSpliced(1,1);
console.log(newArr);


// Activity No.4. DOM Activity
// jQuery Selector
{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<p id="text">Hello</p>

<script>
$("#text").hide();
</script> */}

// Remove Image on Click
{/* <img src="https://via.placeholder.com/100" onclick="removeImg(this)">

<script>
function removeImg(img){
  img.remove();
}
</script> */}

// Activity No.05. Async Await
// Guess Number Game
let num = Math.floor(Math.random() * 10);

async function guess(n){
  if(n === num){
    console.log("Correct!");
  } else {
    console.log("Try again");
  }
}

guess(5);

// Blocking vs Non-Blocking
//Blocking
for(let i=0;i<5;i++){
  console.log(i);
}

//Non-blocking
setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("Done");

// Real-Life Examples-
    // Blocking → ATM transaction
    // Non-blocking → WhatsApp message


// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));

// Activity no.6. Fetch Activity

// Async Await Fetch
async function getUsers(){
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data);
}
getUsers();

// Display Names in HTML
{/* <ul id="list"></ul>

<script>
async function loadUsers(){
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();

  let ul = document.getElementById("list");

  data.forEach(user => {
    let li = document.createElement("li");
    li.textContent = user.name;
    ul.appendChild(li);
  });
}
loadUsers();
</script> */}

// Fetch Posts (First 5)
async function getPosts(){
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();

  console.log(data.slice(0,5));
}
getPosts();

// Fake Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success after 3 sec");
    // reject("Error after 3 sec");
  }, 3000);
});

promise.then(res => console.log(res))
       .catch(err => console.log(err));


// 7. Promises

// Why Promises?
    // Avoid callback hell
    // Better readability

// Example 1
let p = new Promise((res) => res("Done"));
p.then(console.log);

// Example 2
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data));

// Example 3
Promise.resolve(10).then(x => console.log(x));

// Example 4
Promise.reject("Error").catch(console.log);


