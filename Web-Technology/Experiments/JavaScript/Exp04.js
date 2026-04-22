function SubmitButtonClick(){
    console.log("SubmitButtonClick called");
    //get user inputs using DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;

    if(name.trim() == ""){
        document.getElementById('nameError').innerHTML = "Name field is required";
        isValid = false;
    }
    if(email.trim() == "" || !email.includes("@")){
        document.getElementById('emailError').innerHTML = "Invalid Email";
        isValid = false;
    }
    if(password.trim() == "" || password.length < 6){
        document.getElementById('passwordError').innerHTML = "Invalid password";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('successMsg').innerHTML="Form submitted successfully";
        document.getElementById('successMsg').style.color="green";
        return isValid;
    }

    
   
    
}