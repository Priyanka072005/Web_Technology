let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(typeof(myDate));
console.log();

//TimeStamp
//when we create poll in applications then we use timeStamp
console.log(`Timestamp : `);
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now()); //this compare time in miliseconds 
console.log(Date.now()/1000); //convert in second
console.log(Math.floor(Date.now()/1000));
console.log();


let newDate =  new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString('default', { weekday : "long"}));


















