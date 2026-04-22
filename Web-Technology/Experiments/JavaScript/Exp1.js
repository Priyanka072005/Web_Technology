//Experiment 1
//Activity 1
console.log("Activity 1 : Display Student information");
document.writeln("Activity 1 : Display Student information");

let id = 18;
let studentName = "Siddhi";
let email = "siddhi@gmail.com";
let contactNo = "9874125631";

console.log("Id : ", id);
document.writeln("<br>Id : ", id);
console.log("Name : ", studentName);
document.writeln("<br>Name : ", studentName);
console.log("Email : ", email);
document.writeln("<br> Email : ", email);
console.log("Contact No : ", contactNo);
document.writeln("<br>Contact No : ", contactNo);
console.log();


//Activity 2
console.log("Activity 2 : Check whether number is even or odd");
document.writeln("<br><br>Activity 2 : Check whether number is even or odd");

let num = 10;

if(num % 2 == 0){
    console.log(num + " is Even");
    document.writeln("<br>" + num + " is Even");
}else{
    console.log(num + " is Odd");
    document.writeln("<br>" + num + " is Odd");
}
console.log();

//Activity 3
console.log("Activity 3 : Check whether Student pass or fail");
document.writeln("<br><br>Activity 3 : Check whether Student pass or fail");

let marks = 80;

if(marks < 60){
    console.log("Student is fail");    
}else{
    console.log("Student is Pass!!");
}
console.log();

//Activity 4
console.log("Activity 4 : Print numbers from 1 to 10");
document.writeln("<br><br>Activity 4 : Print numbers from 1 to 10");

for(let i = 1; i <= 10; i++){
    console.log(i);
    document.writeln("<br>"+ i);
}
console.log();

//Activity 5
console.log("Activity 5 : Assign value of one variable to another");
document.writeln("<br><br>Activity 5 : Assign value of one variable to another");

let x = 10;
let y = x;

x = 2001;
console.log(x, y);
document.writeln("<br>"+ x + "  " + y);
console.log();

//Activity 6 --> print output ot chrome console

