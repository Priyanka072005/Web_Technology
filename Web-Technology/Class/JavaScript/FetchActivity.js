//Activity 1 - understand the following code line by line
// fetch("https://jsonplaceholder.typiCode.com/users")
// .then((response)=>{
//     return response.json() })
// .then((data) => {
//     console.log(data);})
// .catch((error) => {
//     console.log(error); 
// });

//Activity 2 - async await exmaple with fetch method
async function getusers(){
    try{
        let response = await fetch("https://jsonplaceholder.typiCode.com/users");
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Error : " , error);
    }
}

getusers();

//Activity 3 - fetch user display names in html list
console.log();
async function displayUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        let userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `
            <strong>Name:</strong>${user.name}<br>
            <strong>Username:</strong>${user.username}<br>  
            <strong>Email:</strong> ${user.email} <br>
            <strong>City:</strong> ${user.address.city} <br>
            <strong>Website:</strong>${user.Website}<br>
            <strong>Phone:</strong>${user.phone}<br>
            <strong>Company:</strong> ${user.company.name}<br>
            <hr>`

            userList.appendChild(li);
        });
    }catch(error){
        console.log(error);
    }
}

//Activity 4 - fetch post, show only first 5 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>response.json())
.then(data => {
    const firstFive = data.slice(0, 5);
    console.log("First 5 posts : ",firstFive);

    firstFive.forEach((post, index)=>{
        console.log(`${index + 1}.${post.title}`);
    });
}).catch((error) => {console.log("Error fetching posts : ",error);
})

//Activity 5 - create a fake promise manually resolve after 3 sec and reject after 3 sec
console.log();
const fakePromise = new Promise((resolve, rejected)=>{
    let msg = true;
    setTimeout(()=>{
        if(msg){
            resolve("Promise resolved after 5 seconds");
        }else{
            rejected("Promise rejected after 5 seconds");
        }
    }, 5000);
});

fakePromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
